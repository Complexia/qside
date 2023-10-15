import { useEffect, useState } from "react";
import Image from "next/image";
import ReactPaginate from "react-paginate";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import GalleryPage from "@/components/galleryPage";


const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)

async function getCandyMachinesFromSupabase() {
    const { data, error } = await supabase
        .from("candy_machines")
        .select("*")
        .order("id", { ascending: true });
    if (error) {
        throw error;
    }
    console.log(data);
    return data;
}


const Gallery = async () => {
    let candyMachines = await getCandyMachinesFromSupabase();
    return (
        <GalleryPage candyMachines={candyMachines}/>
    )
};

export default Gallery;
