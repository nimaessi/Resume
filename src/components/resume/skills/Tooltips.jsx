import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const Tooltips = ({text, children}) => {
  return (
    <OverlayTrigger
        placement = "bottom"
        delay = {{ show: 250, hide: 400 }}
        overlay = {(props) => <Tooltip id="button-tooltip" {...props}> {text}</Tooltip>}>
            {children}
    </OverlayTrigger>
  )
}

export default Tooltips;