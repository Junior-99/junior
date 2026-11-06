import { useEffect, useRef } from 'react';
export default function useDialog(open, onClose) {
const ref = useRef(null);
useEffect(() => {
 if (!open) return;
 const previous=document.activeElement, overflow=document.body.style.overflow;
 document.body.style.overflow='hidden';
 const focusable=()=>[...(ref.current?.querySelectorAll('button, a[href], input, select, textarea, [tabindex="0"]')||[])].filter(el=>!el.disabled&&el.getClientRects().length);
 focusable()[0]?.focus();
 function key(e) {if(e.key==='Escape'){e.preventDefault();onClose();} if(e.key!=='Tab')return;const items=focusable(),first=items[0],last=items[items.length-1];if(!first){e.preventDefault();return;}if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}
 document.addEventListener('keydown',key);
 return ()=>{document.body.style.overflow=overflow;document.removeEventListener('keydown',key);previous?.focus();};
},[open,onClose]);return ref;
}
