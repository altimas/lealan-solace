import db from "../../../db";
import { advocates } from "../../../db/schema";
import { advocateData } from "../../../db/seed/advocates";

const serializeSpecialties = (record: any) => {
  record.specialties = JSON.stringify(record.specialties) as any;
  return record;
}

export async function POST() {
  
  // Almost got stuck on this, it wasn't serializing the Jsonb column correctly, and added a bunch of extra quotations
  // Not sure if because of ORM or something else, didn't dive into it much further once I got it working
  const serializedAdvocateData = advocateData.map(serializeSpecialties);
  const records = await db.insert(advocates).values(serializedAdvocateData).returning();

  return Response.json({ advocates: records });
}
