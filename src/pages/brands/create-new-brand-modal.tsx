import { Input } from '@/components/ui/input';
import { Modal } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';
import { Dispatch, SetStateAction, useState } from 'react';
import { Ellipsis, X } from 'lucide-react';
import PlusButton from '@/components/shared/plus-button';

interface CreateNewBrandProfileProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

const CreateNewBrandProfile = ({
  isOpen,
  setIsOpen
}: CreateNewBrandProfileProps) => {
  const [assignedAgents, setAssignedAgents] = useState([
    {
      name: 'Jon Doe',
      profile_pic: ''
    },
    {
      name: 'Marie Curie',
      profile_pic: ''
    },
    {
      name: 'Sophia Schmitz',
      profile_pic: ''
    }
  ]);

  let attachedFiles = [
    {
      fileName: 'Terms & Conditions.pdf',
      fileSize: '100kb',
      status: 'Complete'
    },
    {
      fileName: 'NDA_002.pdf',
      fileSize: '275kb',
      status: 'Complete'
    }
  ];

  const handleRemovegent = (index: number) => {
    let assignedAgentsArr = assignedAgents;
    assignedAgentsArr.splice(index, 1);
    setAssignedAgents([...assignedAgentsArr]);
  };

  const addAgent = () => {
    let assignedAgentsArr = assignedAgents;
    assignedAgentsArr.push({
      name: 'New Agent',
      profile_pic: ''
    });
    setAssignedAgents([...assignedAgentsArr]);
  };

  return (
    <Modal
      title="Create new brand profile"
      isOpen={isOpen}
      className="max-h-[90%] w-[80%] overflow-y-auto bg-white p-1 pb-6"
      onClose={function (): void {
        setIsOpen(false);
      }}
    >
      <div className="flex w-full bg-white sm:mx-auto">
        <div className="flex w-3/4 gap-x-6 border-y-2 border-stone-200 px-4 py-6">
          {/* Photo upload */}
          <div className="w-1/4">
            <div className="pb-6">
              <div className="flex items-center justify-between pb-2">
                <h1>Upload cover photo</h1>
                <PlusButton
                  className="h-8 w-8 rounded-full bg-transparent p-0 text-black shadow-none"
                  btnTitle={''}
                  onClick={undefined}
                />
              </div>
              <div className="w-38 flex h-28 items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-100">
                <span className="text-sm text-gray-500">Fill x 122</span>
              </div>
              <p className="mt-2 text-xs text-gray-400">
                Cover photo image should have dimensions of 1080px by 1080px
              </p>
            </div>
            <div className="pb-6">
              <div className="flex items-center justify-between pb-2">
                <h1>Upload profile image</h1>
                <PlusButton
                  className="h-8 w-8 rounded-full bg-transparent p-0 text-black shadow-none"
                  btnTitle={''}
                  onClick={undefined}
                />
              </div>
              <div className="flex h-28 w-28 items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-100">
                <span className="text-center text-xs text-gray-500">
                  Upload profile image
                </span>
              </div>
              <p className="mt-2 text-xs text-gray-400">
                Profile images should have dimensions of 1080px by 1080px
              </p>
            </div>
          </div>

          {/* Brand Details */}
          <div className="w-3/4">
            {/* Basic Information */}
            <h1 className="pb-4">Basic Information</h1>
            <div className="mb-6 flex w-full flex-wrap gap-y-2">
              <Input
                type="text"
                placeholder="Brand name"
                className="w-full rounded-lg border border-gray-300 p-2"
              />
              <textarea
                placeholder="Description"
                maxLength={256}
                className="h-24 w-full rounded-lg border border-gray-300 bg-gray-50 p-2 focus:border-none focus:outline-none focus:ring-1 focus:ring-black"
              />
              <div className="w-1/2 pr-1">
                <Input
                  type="text"
                  placeholder="Industry"
                  className="w-full rounded-lg border border-gray-300 p-2"
                />
              </div>
              <div className="w-1/2 pl-1">
                <Input
                  type="text"
                  placeholder="Website"
                  className="w-full rounded-lg border border-gray-300 p-2"
                />
              </div>
            </div>

            {/* Social Media Links */}
            <h1 className="pb-4">Social Media Links</h1>
            <div className="mb-6 flex w-full flex-wrap gap-y-2">
              {[
                'Instagram',
                'Youtube',
                'TikTok',
                'X (formerly Twitter)',
                'Facebook',
                'Snapchat'
              ].map((platform) => (
                <div key={platform} className="w-1/2 pr-2 ">
                  <Input
                    type="text"
                    placeholder={platform}
                    className="w-full rounded-lg border border-gray-300"
                  />
                </div>
              ))}
            </div>

            {/* Company Details */}
            <h1 className="pb-4">Company Details</h1>
            <div className="flex flex-wrap gap-y-2">
              {[
                'Registered address',
                'VAT number',
                'Email address',
                'Telephone number',
                'Name',
                'Contact number',
                'Email address',
                'LinkedIn'
              ].map((detail) => (
                <div className="w-1/2 pr-2">
                  <Input
                    type="text"
                    placeholder={detail}
                    className="w-full rounded-lg border border-gray-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-1/4 max-w-sm border-y-2 border-l-2 border-stone-200">
          {/* Assigned Agents Section */}
          <div className="px-4 py-6">
            <div className="mb-2 flex items-center justify-between">
              <h4 className="font-medium">Assigned Agents</h4>
              <PlusButton
                className="h-8 w-8 rounded-full bg-transparent p-0 text-black shadow-none"
                btnTitle={''}
                onClick={() => addAgent()}
              />
            </div>
            <div className="h-20 space-y-2 overflow-y-auto">
              {assignedAgents.map((agent, i) => (
                <div className="flex items-center justify-between space-x-2 pr-2">
                  <div className="flex items-center gap-x-3">
                    {/* <img 
                      src="path_to_image" 
                      alt="Agent"
                      className="w-8 h-8 rounded-full object-cover"
                    /> */}
                    <div className="h-8 w-8 rounded-full bg-stone-400"></div>
                    <span className="text-sm">{agent.name}</span>
                  </div>
                  <Button
                    onClick={() => handleRemovegent(i)}
                    className="h-10 w-10 rounded-full bg-transparent p-3 text-gray-400 shadow-none hover:text-gray-700"
                  >
                    <X className="size-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Attach Files Section */}
          <div className="border-[1px] border-x-0 border-stone-200 px-4 py-6">
            <div className="mb-2 flex items-center justify-between">
              <h4 className="text-sm font-medium">Attach files</h4>
              <PlusButton
                className="h-8 w-8 rounded-full bg-transparent p-0 text-black shadow-none"
                btnTitle={''}
                onClick={undefined}
              />
            </div>
            <div className="mb-4 rounded-lg border-4 border-dashed border-gray-300 bg-stone-50 p-4 text-center text-sm text-gray-500">
              <input type="file" className="hidden" />
              Drop files here to upload
            </div>
            <div className="space-y-2">
              {attachedFiles.map((file) => (
                <div className="flex flex-row items-start justify-between p-2">
                  <div className="flex flex-col">
                    <span className="text-sm">{file.fileName}</span>
                    <span className="text-xs text-gray-500">
                      {file.fileSize} • {file.status}
                    </span>
                  </div>
                  <Button className="bg-transparent p-0 text-gray-600 shadow-none hover:text-gray-800">
                    <Ellipsis className="size-5" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Person Section */}
          <div className="px-4 pt-6 ">
            <div className="flex items-center justify-between pb-4">
              <h4 className="text-sm font-medium">Contact person</h4>
              <Button className="bg-transparent text-gray-500 shadow-none hover:text-gray-800">
                Edit
              </Button>
            </div>
            <div className="w-full space-y-2">
              {['Name', 'Contact Number', 'Email Address', 'LinkedIn'].map(
                (field) => (
                  <div key={field} className="pr-2">
                    <Input
                      type="text"
                      placeholder={field}
                      className="w-full rounded-lg border border-gray-300 focus:border-none focus:outline-none focus:ring-black"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p mt-6 flex justify-end">
        <button
          className="mr-3 rounded-lg bg-gray-200 px-4 py-2 text-gray-700"
          onClick={() => setIsOpen(false)}
        >
          Complete later
        </button>
        <button
          className="rounded-lg bg-black px-4 py-2 text-white"
          onClick={() => setIsOpen(false)}
        >
          Save
        </button>
      </div>
    </Modal>
  );
};

export default CreateNewBrandProfile;
