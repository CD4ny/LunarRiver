#!/bin/bash

# Script to remove empty directories in a project folder

# Define the target directory (default: current directory)
TARGET_DIR="${1:-.}"

# Check if the target directory exists
if [[ ! -d "$TARGET_DIR" ]]; then
  echo "Error: Directory '$TARGET_DIR' does not exist."
  exit 1
fi

# Find and list empty directories
EMPTY_DIRS=$(find "$TARGET_DIR" -type d -empty)

# Check if there are any empty directories
if [[ -z "$EMPTY_DIRS" ]]; then
  echo "No empty directories found in '$TARGET_DIR'."
  exit 0
fi

# Display the list of empty directories
echo "The following empty directories were found:"
echo "$EMPTY_DIRS"

# Ask for user confirmation before deletion
read -rp "Do you want to remove these empty directories? (y/n): " CONFIRMATION

if [[ "$CONFIRMATION" == "y" || "$CONFIRMATION" == "Y" ]]; then
  # Remove empty directories
  echo "Removing empty directories..."
  find "$TARGET_DIR" -type d -empty -exec rmdir {} \;
  echo "Empty directories have been successfully removed."
else
  echo "Operation canceled. No directories were removed."
fi