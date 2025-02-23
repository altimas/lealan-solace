import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { advocates } from './schema';
import { ilike, or, sql } from "drizzle-orm";

const setup = () => {
  if (!process.env.DATABASE_URL) {
    return {
      db: null,
      getAdvocates: async () => {
        throw new Error("No Database URL Set.")
      }
    };
  }

  // for query purposes
  const queryClient = postgres(process.env.DATABASE_URL);
  const db = drizzle(queryClient);

  const getAdvocates = async (searchTerm?: string) => {
    const searchFilter = `%${searchTerm}%`;
    const query = db
    .select({
      records: advocates
    }).from(advocates).where(or(
      ilike(advocates.firstName, searchFilter),
      ilike(advocates.lastName, searchFilter),
      ilike(advocates.city, searchFilter),
      ilike(advocates.degree, searchFilter),
      sql`EXISTS ( SELECT 1 FROM jsonb_array_elements_text(${advocates.specialties}) AS elem WHERE elem ILIKE ${searchFilter})`
     ))

     return await query;
  };

  return {
    db,
    getAdvocates
  }
};

export default setup();
