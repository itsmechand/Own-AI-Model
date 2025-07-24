import requests
url="http://localhost:11434/api/generate"
headers={'Content-Type': 'application/json'}
PayLoad={
        "model": "llama3.2:1b",
        "prompt": "Why do we want to use LLMs?",
        "stream": False
    }
response = requests.post(url, headers=headers, json=PayLoad)
result= response.json()
answer=result.get('response', '')

print(f"Answer: {answer}")