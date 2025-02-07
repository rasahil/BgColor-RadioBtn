import {
  Button,
  Card,
  Checkbox,
  Input,
  Popover,
  PopoverContent,
  PopoverHandler,
  Typography,
} from "@material-tailwind/react";

const Contact = () => {
  return (
    <div>
      <div className="text-center mt-10">
        <Popover placement="top">
          <PopoverHandler>
            <Button>Contact</Button>
          </PopoverHandler>
          <PopoverContent>
            <span>This is the Contact Us page </span>
          </PopoverContent>
        </Popover>
      </div>

      <div className=" flex justify-center mt-8">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Contact Us 
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to register.
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
              </Typography>
              <Input
                size="lg"
                required
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                size="lg"
                required
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button className="mt-6" fullWidth>
           Submit
            </Button>
           
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
