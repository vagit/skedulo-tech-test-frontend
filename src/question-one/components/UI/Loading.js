import React from 'react'
import loadingSrc from '../../assets/loading.gif'
const Loading = (props) => (props.show && <div className="text-center"><img className="w-10 inline" src={loadingSrc} alt={loadingSrc} /><p>Loading results</p></div>)
export default Loading
