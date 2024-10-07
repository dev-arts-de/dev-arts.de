

import requests
import re
import subprocess
import os

# Fetch a random quote from ZenQuotes API
def fetch_quote():
    url = "https://zenquotes.io/api/random"
    response = requests.get(url)
    data = response.json()
    if response.status_code == 200 and len(data) > 0:
        return data[0]['q'], data[0]['a']  # q -> quote, a -> author
    else:
        raise Exception("Failed to fetch quote from ZenQuotes")

# Update only the second occurrence of 'title' and 'details' in the features section
def update_specific_quote(file_path, new_quote, new_author):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Find all features sections and store them
    matches = list(re.finditer(r'(title: ".*?")\n\s*(details: ".*?")', content))

    # Ensure we have at least two matches to replace the second one
    if len(matches) >= 2:
        second_match = matches[1]  # Target the second match
        start, end = second_match.span()

        # Replace only the second match with the new quote and author
        updated_content = (
            content[:start] + 
            f'title: "{new_quote}"\n    details: "– {new_author}"' + 
            content[end:]
        )

        # Save the updated content back to the file
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(updated_content)

        print("Updated the second quote in the file.")
    else:
        print("No second quote found to update.")

# Git commit and push function
def git_commit_and_push(file_path):
    try:
        # Stage the file
        subprocess.run(["git", "add", file_path], check=True)
        # Commit with a specific message
        subprocess.run(["git", "commit", "-m", "feat: update quote"], check=True)
        # Push the changes to the remote repository
        subprocess.run(["git", "push"], check=True)
        print("Changes committed and pushed successfully.")
    except subprocess.CalledProcessError as e:
        print(f"Error during Git operation: {e}")

if __name__ == "__main__":
    file_path = './index.md'  # Replace with the actual file path
    
    try:
        # Fetch new quote and author
        quote, author = fetch_quote()
        
        # Update only the second occurrence of title and details
        update_specific_quote(file_path, quote, author)
        
        # Commit and push changes to Git
        git_commit_and_push(file_path)
    
    except Exception as e:
        print(f"Error: {e}")
