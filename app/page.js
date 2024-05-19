import FileUpload from "@/components/FileUpload/page";
import Header, { poppins } from "@/components/Header/page"
import { getPopularTags } from "@/services/firebase";
export default async function Home() {
  const tags = await getPopularTags();
  return (
    <main className="">
      <div className="grid grid-cols-[3fr_2fr] p-24">
        <div className="p-10">
        {/* <h2 className={`${poppins.className} text-2xl font-bold tracking-wider`}>Resume<span className='text-orange-200'>Archive</span></h2> */}
    <p className={`${poppins.className} pr-9 border py-5 px-5 rounded-2xl tracking-wider text-xl`}>
    <span className="font-bold">ResumeArchive</span> is a web-based application designed to scan, store, and publicly share resumes (CVs). Users can upload their resumes, which are then parsed and stored in a centralized, searchable database.
    </p>
    <h2 className="text-3xl font-bold my-5">Popular Skills on ResumeArchive</h2>
          <div className=" flex flex-wrap gap-2">
            {tags.map((tag,key)=>{
              return <p key={key} className="bg-slate-800 text-orange-100 px-2 py-1 text-sm rounded flex gap-2">{tag[0].toString().toUpperCase()}<span className="">{tag[1]}</span></p>
            })}
          </div>
        </div>
      <FileUpload />
      </div>
    </main>
  );
}