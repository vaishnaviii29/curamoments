import React, { useState, ReactNode } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { MdHelpOutline } from 'react-icons/md';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="">
      <h2>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 ${
            isOpen ? 'rounded-t-xl' : 'border-b border-gray-200 dark:border-gray-700'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="accordion-body"
        >
          <span className="flex items-center font-semibold font-spartan text-black">
            
            {title}
          </span>
          <FiChevronDown
            className={`w-8 h-8 transform ${
              isOpen ? 'rotate-180' : ''
            } transition-transform duration-200`}
          />
        </button>
      </h2>
      {isOpen && (
        <div className=" border-b border-gray-200 dark:border-gray-700">
          {children}
        </div>
      )}
    </div>
  );
};

const Accordion2: React.FC = () => {
  return (
    <div id="accordion-open" className="pr-10">
      <AccordionItem title="Part 1 " defaultOpen={true}>
      <p className="mb-2 pr-10  pl-5 text-[#181818] font-spartan dark:text-gray-400">
  Your path begins at the doorway to unconditional joy: which, as unlikely as it may seem, is through an authentic understanding of the nature of suffering. You’ll join Sadhguru on an exploration of what really causes suffering, why you experience suffering, and how you can transcend it - without depending on anything or anyone but yourself.
</p>
<ul className="list-disc  text-[#181818] font-spartan dark:text-gray-400 p-5 pl-10">
  <li>The true source of all suffering: most people never truly understand where their suffering comes from - and knowing it is the first step to never facing it again.</li>
  <li>How change in your life can cause unnecessary suffering: change is inevitable, but suffering isn’t when you embrace this new way of facing any change - from minor readjustments to seismic shifts.</li>
  <li>How your intellect traps you in suffering: the human intellect is a beautiful gift - but the vast majority of people mismanage theirs in a way that courts deep suffering. Discover how to break free of this trap.</li>
  <li>Savoring a life free of fear: how many opportunities and gifts have you missed as a result of fear? Learn effective techniques for managing your inner world so that crippling fear makes way for endless possibilities.</li>
</ul>

       
      </AccordionItem>

      <AccordionItem title="Lorem Ipsum is simply dummy text of the printing and typesetting industry?">
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </p>
        
      </AccordionItem>

      <AccordionItem title="Lorem Ipsum is simply dummy text of the printing and typesetting industry?">
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </p>
        
      </AccordionItem>
      <AccordionItem title="Lorem Ipsum is simply dummy text of the printing and typesetting industry?">
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </p>
        
      </AccordionItem>
      <AccordionItem title="Lorem Ipsum is simply dummy text of the printing and typesetting industry?">
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </p>
        
      </AccordionItem>

    </div>
  );
};

export default Accordion2;
