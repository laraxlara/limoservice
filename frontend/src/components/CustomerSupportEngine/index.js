import React, { useRef, useEffect, useState } from 'react'
import Avatar from './Avatar'
import CustomerSupportWindow from './CustomerSupportWindow';

const CustomerSupportEngine = () => {
  const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    const [visible, setVisible] = useState(false)

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setVisible(false)
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
  return (
    <div ref={wrapperRef}>
      {/* <CustomerSupportWindow visible={visible} />
      <Avatar onClick={() => setVisible(true)} /> */}
    </div>
  )
}

export default CustomerSupportEngine
