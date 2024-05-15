import { Button, Popover, PopoverContent, PopoverHandler } from "@material-tailwind/react"


const Home = () => {
  return (
    <div className="text-center ">
        <img className="img-fluid w-full relative " src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D" alt="" />
    
   
        <div className="absolute top-1/2 start-1/2">
        <Popover placement="top">
          <PopoverHandler>
            <Button>Home</Button>
          </PopoverHandler>
          <PopoverContent>
            <span>This is the home page </span>
          </PopoverContent>
        </Popover>
        </div>
      
    </div>
  )
}

export default Home
