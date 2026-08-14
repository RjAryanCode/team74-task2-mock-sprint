import type { Metadata } from 'next'
import { getServerSession } from '@/actions/auth.actions'

export const metadata: Metadata = {
  title: 'Team',
}

export default async function ProfilePage() {
  const session = await getServerSession()

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Editor Academy Team</h1>
      </div>

      <div className="TeamMemberWrapAroundBox">
    <div className="TeamMemberBox">
      <div className="space-y-4 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div>
          <img src="Walaa.jpeg" alt="Walaa" width="200" height="100"></img>
          <p className="mt-1 text-sm">Walaa Ghanduri</p>
          <p className="text-xs font-medium tracking-wide text-zinc-400">UX Designer</p>
          <p className ="FontSize10 ">I'm studying the bachelors of Computer Science with a focus on Artificial Intelligence and Data Science. I enjoy learning about algorithms and problem solving. Aside from university, I enjoy geography, reading and going on walks. </p>
        </div>
       </div>
      </div>

    <div className="TeamMemberBox">
      <div className="space-y-4 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div>
          <img src="/Riley.jpeg" alt="Riley" width="300" height="300"></img>
          <p className="mt-1 text-sm">Riley Pittard</p>
          <p className="text-xs font-medium tracking-wide text-zinc-400">Business Analyst</p>
          <p className ="FontSize10">I’m a final-semester Information Technology student majoring in cyber security, with interests in business operations and designing digital solutions to meet real-world outcomes. I’m particularly interested in how technology can support efficient processes and informed decision-making.</p>
        </div>
       </div>
      </div>

      <div className="TeamMemberBox">
      <div className="space-y-4 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div>
          <img src="/Aryan.jpeg" alt="Aryan" width="200" height="100"></img>
          <p className="mt-1 text-sm">Aryan Rajendra</p>
          <p className="text-xs font-medium tracking-wide text-zinc-400">Project Manager</p>
          <p className ="FontSize10">I’m a Bachelor of Information Technology student with a strong interest in cybersecurity, technology and problem-solving. I enjoy working on practical projects, learning new systems and finding efficient solutions to real-world problems. Outside of university, I’m passionate about fitness, basketball and continually improving both personally and professionally.</p>
        </div>
       </div>
      </div>

      <div className="TeamMemberBox">
      <div className="space-y-4 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div>
          <img src="/Shaikh.jpeg" alt="Shaikh" width="200" height="100"></img>
          <p className="mt-1 text-sm">Shaikh Zarin Tasnim</p>
          <p className="text-xs font-medium tracking-wide text-zinc-400">Developer</p>
          <p className ="FontSize10">I’m a final-semester Computer Science student focused on AI, Data Science, and Cybersecurity. I’m fascinated by how intelligent systems learn from data and how technology can be designed to be both innovative and secure. Outside of my studies, I enjoy cryptography, reading books, and photography</p>
        </div>
       </div>
      </div>

      <div className="TeamMemberBox">
      <div className="space-y-4 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div>
          <img src="/reshan.jpg" alt="Reshan" width="200" height="100"></img>
          <p className="mt-1 text-sm">Reshan Lahandapura</p>
          <p className="text-xs font-medium tracking-wide text-zinc-400">Developer</p>
          <p className ="FontSize10">I am learning a 3rd year bachelor of IT student who majoring in Cyber Security, I rockclimbing as well as webpage editing. I wish to learn more about cyber security so I can be someone who can keep up with evolving theats so I can stay protected and keep others protected.</p>
        </div>
       </div>
      </div>
      </div>

    
    </div>
  )
}
