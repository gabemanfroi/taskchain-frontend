import { web3 } from "./web3Config";
import todoListArtifact from "../../../build/contracts/TodoList.json";

const contractAddress = "0xd89B8037C013E61E8d670857E3e5814802b75285"; // Replace with your deployed contract address

const contractInstance = new web3.eth.Contract(
  todoListArtifact.abi,
  contractAddress
);

export async function getTotalTodoCount(): Promise<number> {
  return contractInstance.methods.getTaskCount().call();
}

export async function getTodoContent(index: number): Promise<string> {
  return contractInstance.methods.getTask(index + 1).call();
}

export async function addTodoItem(content: string): Promise<void> {
  const convertedContent = web3.utils.fromAscii(content).padEnd(66, "0");
  return contractInstance.methods
    .addTask(convertedContent)
    .send({ from: (await web3.eth.getAccounts())[0], gas: 100000 });
}
