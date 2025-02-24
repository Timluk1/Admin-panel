export type Payment = {
    id: number
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

export const data: Payment[] = [
    { id: 1, amount: 100, status: "processing", email: "timurflash111@gmail.com" },
    { id: 2, amount: 200, status: "success", email: "timurflash111@gmail.com" },
    { id: 3, amount: 130, status: "success", email: "timurflash111@gmail.com" },
    { id: 4, amount: 500, status: "processing", email: "timurflash111@gmail.com" },
    { id: 5, amount: 10, status: "success", email: "timurflash111@gmail.com" },
]