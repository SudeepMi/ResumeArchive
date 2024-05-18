import FileUpload from "@/components/FileUpload/page";
import Header, { poppins } from "@/components/Header/page"
export default function Home() {
  return (
    <main className="">
      <div className="grid grid-cols-[3fr_2fr] p-24">
        <div className="p-10">
        {/* <h2 className={`${poppins.className} text-2xl font-bold tracking-wider`}>Resume<span className='text-orange-200'>Archive</span></h2> */}
    <p className={`${poppins.className} pr-9 border py-5 px-5 rounded-2xl tracking-wider text-xl`}>
    <span className="font-bold">ResumeArchive</span> is a web-based application designed to scan, store, and publicly share resumes (CVs). Users can upload their resumes, which are then parsed and stored in a centralized, searchable database.
    </p>
        </div>
      <FileUpload />
      </div>
    </main>
  );
}