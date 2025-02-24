export type typeStatus = "pending" | "processing" | "success" | "failed"

export type Payment = {
    id: number
    amount: number
    status: typeStatus
    email: string
}

export const keys = ["id", "amount", "status", "email"]

export const dat: Payment[] = [
    { id: 1, amount: 150, status: "processing", email: "john.doe@example.com" },
    { id: 2, amount: 250, status: "failed", email: "mary.smith@example.com" },
    { id: 3, amount: 1200, status: "success", email: "jane.doe@example.com" },
    { id: 4, amount: 350, status: "pending", email: "alex.jones@example.com" },
    { id: 5, amount: 50, status: "success", email: "david.williams@example.com" },
    { id: 6, amount: 900, status: "success", email: "lucy.brown@example.com" },
    { id: 7, amount: 270, status: "processing", email: "michael.johnson@example.com" },
    { id: 8, amount: 1750, status: "failed", email: "elizabeth.white@example.com" },
    { id: 9, amount: 430, status: "pending", email: "william.jones@example.com" },
    { id: 10, amount: 620, status: "success", email: "emma.clark@example.com" },
]
