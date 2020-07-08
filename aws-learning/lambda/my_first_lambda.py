import boto3
from pprint import pprint

client = boto3.client('lambda')

pprint(client.list_functions())
print("--------------------------------------------------")

response = client.invoke(
            FunctionName="my-function"
)

pprint(response)