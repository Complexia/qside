import { NextRequest, NextResponse } from "next/server";

import { createClient } from "@supabase/supabase-js";


const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)

// Define the table name
const tableName = 'candy_machines';

async function createCandyMachine(candyMachine: any) {
  try {
    //@ts-ignore
    const { data, error } = await supabase.from(tableName).insert([candyMachine]).select();

    if (error) {
      throw error;
    }

    console.log('Object inserted successfully:', data);
    return data;
  } catch (error) {
    //@ts-ignore
    console.error('Error inserting object:', error.message);
  }
}

interface RequestBody {
    candy_machine_id: string;
    collection_id: string;
    user_wallet_address: string;
}


export async function POST(request: NextRequest, response: NextResponse | undefined) {
    const {
        data: { user },
        //@ts-ignore
        } = await supabase.auth.getUser();
    
    
    

    if (!user) {
        return NextResponse.json({ message: "Unauthorized" }); 
    }
    try {
        const body = await request.json() as RequestBody;
        const res = await createCandyMachine(body);
        if (res) {
            return NextResponse.json({ success: true, uuid: res[0].id });
        } else {
            console.error("Error creating candy machine: response is undefined");
            return NextResponse.json({ message: "Error creating candy machine" });
        }
    } catch (error) {
        console.error("Error creating candy machine:", error);
        return NextResponse.json({ message: "Error creating candy mchine" });
    }
}