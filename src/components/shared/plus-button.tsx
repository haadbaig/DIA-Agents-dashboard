import { Plus } from 'lucide-react';
import { Button } from '../ui/button';

const PlusButton = ({ className, btnTitle, onClick }) => {
  return (
    <Button className={className} onClick={onClick}>
      <Plus className="size-5" />
      {btnTitle ?? <p>{btnTitle}</p>}
    </Button>
  );
};

export default PlusButton;
