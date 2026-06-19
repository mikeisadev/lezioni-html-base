import os

for folder in os.listdir():
    if (":" in folder):
        new_foldername = folder.replace(":", "")
        
        os.rename(folder, new_foldername)
        
        print("[FOLDER RENAMED]", folder, new_foldername, sep="|")

