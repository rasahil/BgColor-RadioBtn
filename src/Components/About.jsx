import { Button, Popover, PopoverContent, PopoverHandler } from "@material-tailwind/react";

const About = () => {
  return (
    <div className="text-center mt-60">
      
      <Popover placement="top">
          <PopoverHandler>
            <Button>About</Button>
          </PopoverHandler>
          <PopoverContent>
            <span>This is the About Us page </span>
          </PopoverContent>
        </Popover>
    </div>
  );
};

export default About;
