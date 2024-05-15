import { Button, Popover, PopoverContent, PopoverHandler } from "@material-tailwind/react"

const Help = () => {
  return (
    <div className="text-center mt-60">
    
    <Popover placement="top">
          <PopoverHandler>
            <Button>Help</Button>
          </PopoverHandler>
          <PopoverContent>
            <span>You Need A Help Plzzzz Let me know </span>
          </PopoverContent>
        </Popover>
    </div>
  )
}

export default Help
