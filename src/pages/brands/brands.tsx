import DataTable from '@/components/shared/data-table2';
import { Button } from '@/components/ui/button';
import { Bell, Filter, ListFilter, Plus } from 'lucide-react';
import CreateNewBrandProfile from './create-new-brand-modal';
import { useState } from 'react';

const headers = [
  'Name',
  'Industry',
  'Assigned Agents',
  'Number of campaigns',
  'Total amount spent'
];

const sampleData = [
  {
    name: 'Sephora',
    industry: 'Beauty',
    assignedAgents: [
      { name: 'Agent 1', image: 'https://via.placeholder.com/150' },
      { name: 'Agent 2', image: 'https://via.placeholder.com/150' }
    ],
    numberOfCampaigns: 5,
    totalAmountSpent: 'GBP 12,257'
  },
  {
    name: 'Zara',
    industry: 'Fashion',
    assignedAgents: [
      { name: 'Agent 3', image: 'https://via.placeholder.com/150' },
      { name: 'Agent 4', image: 'https://via.placeholder.com/150' }
    ],
    numberOfCampaigns: 7,
    totalAmountSpent: 'GBP 18,257'
  }
  // Add more data as per the screenshot...
];

export default function BrandsPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="h-screen w-full bg-white">
        {/* Top navbar */}
        <div className="flex h-14 items-center justify-between border-b-2 border-slate-100 p-2">
          <h1 className="text-sm font-bold">Brands</h1>
          <div className="flex items-center gap-x-3">
            <input
              className="rounded-md border-2 border-slate-200 bg-gray-100 p-1 text-xs focus:outline-none"
              placeholder="Search"
            />
            <Bell className="size-5 text-slate-500" />
          </div>
        </div>

        {/* page title */}
        <div className="h-18 flex flex-col items-start justify-center border-b-2 border-slate-100 p-2">
          <h1 className="text-md font-bold">Brands</h1>
          <p className="text-sm text-slate-400">
            These are your available brands
          </p>
        </div>

        {/* page */}
        <div className="h-18 flex flex-row items-center justify-between p-2">
          <Button
            className="gap-x-2 bg-black text-white hover:bg-black hover:text-slate-300"
            onClick={() => setIsOpen(true)}
          >
            <Plus className="size-4" /> Create new brand profile
          </Button>
          <div className="flex gap-x-3">
            <input
              className="w-28 rounded-md border-2 border-slate-100 p-1 text-xs focus:outline-none"
              placeholder="Search"
            />
            <Button className="w-20 gap-x-2 rounded-md border-2 border-slate-100 bg-transparent p-1 text-xs shadow-none focus:outline-none">
              <ListFilter className="size-3 text-black" />
              Sort
            </Button>
            <Button className="w-20 gap-x-2 rounded-md border-2 border-slate-100 bg-transparent p-1 text-xs shadow-none focus:outline-none">
              <Filter className="size-3 text-black" />
              Filter
            </Button>
          </div>
        </div>

        <DataTable headers={headers} dataSource={sampleData} paginated={true} />
        <CreateNewBrandProfile setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
    </>
  );
}
