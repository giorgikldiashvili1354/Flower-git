import mongoConnect from '@/db'
import Flower from '@/models/FlowerModel';
import { NextResponse } from 'next/server'
 
export  async function GET(request) {
   await mongoConnect();
try{
     const flowers = await Flower.find({});
     return  NextResponse.json(flowers)
}catch(err) {
   return NextResponse.json({ error:err }, { status: 500 })

}
  
}