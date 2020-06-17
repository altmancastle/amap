import * as React from 'react';

type Ref = React.Ref<any>

const Map = React.forwardRef(function Map(props, ref:Ref) {

  return (
    <div ref={ref}>

    </div>
  )
})


export default Map;