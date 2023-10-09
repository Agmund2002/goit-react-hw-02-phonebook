import { Contact } from "components/Contact/Contact";

export const ContactList = ({arr, onDelete}) => {
  return (
    <ul>
      {arr.map(item => (
        <li key={item.id}>
          <Contact data={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
