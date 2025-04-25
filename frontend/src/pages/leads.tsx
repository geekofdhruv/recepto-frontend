
import { leads } from '../data/lead'
import Sidebar from '../components/sidebar'
import Header from '../components/header'  
import { LeadList } from '../components/leadList'


function Leads() {
  return (
    <div className="flex h-screen bg-gray-50">
    <Sidebar />
    <div className="flex flex-col flex-1 overflow-hidden">
      <Header />
      
      <LeadList leads={leads} />
    </div>
  </div>
  )
}

export default Leads
