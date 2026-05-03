import dbConnect from "@/lib/dbconnect";
import UserModel from "@/Model/User";
import bcrypt from "bcryptjs";


export async function POST(request: Request){
    await dbConnect()

    try {
        const {username, email, password} = await request.json()
    } catch (error) {
        console.error("Error registering user", error)
        return Response.json(
            {
                success: false,
                message: "Error registering User"
            },
            {
                status: 500
            }
        )
    }
} 