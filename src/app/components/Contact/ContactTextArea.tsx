import React from "react";

interface ContactTextAreaProps {
  row: string;
  placeholder: string;
  name: string;
  defaultValue?: string;
}

const ContactTextArea: React.FC<ContactTextAreaProps> = ({
  row,
  placeholder,
  name,
  defaultValue,
}) => {
  return (
    <div className="mb-6">
      <textarea
        rows={parseInt(row)} // rows attribute expects a number
        placeholder={placeholder}
        name={name}
        className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default ContactTextArea;
