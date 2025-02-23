"use client"

import { Advocate } from '@/db/schema';


type Props = {
    data: Array<Advocate>
}

export default function AdvocatesSection({data}: Props) {
 return (
    <main className="mt-4 p-4 flex justify-center align-center">
        <div className="max-w-7xl w-full">
        {data.map((advocate) => {
          return (
            <div className="shadow-2xs p-4 border border-black rounded-lg mb-4">
                <h3 className='text-lg font-bold'>{`${advocate.firstName} ${advocate.lastName}, ${advocate.degree}`}</h3>
                <h4>{`${advocate.city}`}</h4>
                <p>{`Years of Experience: ${advocate.yearsOfExperience}`}</p>
                <p>{`Phone: ${advocate.phoneNumber}`}</p>
                <div className="flex flex-wrap">
                    {advocate.specialties.map((specialty) => {
                        return <span className="rounded-2xl border border-black p-2 m-2" key={specialty}>{specialty}</span>
                    })}
                </div>
            </div>
          );
        })}
        </div>
      
    </main>
  );

}

{/* <table>
        
        <th>First Name</th>
        <th>Last Name</th>
        <th>City</th>
        <th>Degree</th>
        <th>Specialties</th>
        <th>Years of Experience</th>
        <th>Phone Number</th>
      
      <tbody>
        {data.map((advocate) => {
          return (
            <tr>
              <td>{advocate.firstName}</td>
              <td>{advocate.lastName}</td>
              <td>{advocate.city}</td>
              <td>{advocate.degree}</td>
              <td>
                {advocate.specialties.map((s) => (
                  <div>{s}</div>
                ))}
              </td>
              <td>{advocate.yearsOfExperience}</td>
              <td>{advocate.phoneNumber}</td>
            </tr>
          );
        })}
      </tbody>
    </table> */}