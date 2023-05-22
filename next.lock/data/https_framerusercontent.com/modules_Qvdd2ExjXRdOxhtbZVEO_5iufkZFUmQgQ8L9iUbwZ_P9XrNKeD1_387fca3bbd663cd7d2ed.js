// Generated by Framer (b2eeca0)
import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";import{addFonts,addPropertyControls,ControlType,cx,RichText,SVG,useActiveVariantCallback,useVariantState,withCSS}from"framer";import{LayoutGroup,motion}from"framer-motion";import*as React from"react";const enabledGestures={Efm5YWhER:{pressed:true},k0AMsWXn_:{pressed:true}};const cycleOrder=["k0AMsWXn_","Efm5YWhER"];const variantClassNames={Efm5YWhER:"framer-v-hbb6sr",k0AMsWXn_:"framer-v-7sxk6u"};function addPropertyOverrides(overrides,...variants){const nextOverrides={};variants===null||variants===void 0?void 0:variants.forEach(variant=>variant&&Object.assign(nextOverrides,overrides[variant]));return nextOverrides;}const humanReadableVariantMap={"Variant 1":"k0AMsWXn_","Variant 2":"Efm5YWhER"};const transitions={default:{damping:60,delay:0,duration:.3,ease:[.44,0,.56,1],mass:1,stiffness:500,type:false}};const transformTemplate=(_,t)=>`translateX(-50%) ${t}`;const Component=/*#__PURE__*/ React.forwardRef(function({id,style,className,width,height,layoutId,variant:outerVariant="k0AMsWXn_",tap:fx9nsxuZZ,...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{baseVariant,classNames,gestureVariant,setGestureState,setVariant,transition,variants}=useVariantState({cycleOrder,defaultVariant:"k0AMsWXn_",enabledGestures,transitions,variant,variantClassNames});const layoutDependency=variants.join("-")+restProps.layoutDependency;const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const onTap1gvh565=activeVariantCallback(async(...args)=>{if(fx9nsxuZZ){const res=await fx9nsxuZZ(...args);if(res===false)return false;}setVariant("Efm5YWhER");});const onTap169kow5=activeVariantCallback(async(...args)=>{if(fx9nsxuZZ){const res=await fx9nsxuZZ(...args);if(res===false)return false;}setVariant("k0AMsWXn_");});const isDisplayed=()=>{if(gestureVariant==="Efm5YWhER-pressed")return false;if(baseVariant==="Efm5YWhER")return false;return true;};const isDisplayed1=()=>{if(gestureVariant==="Efm5YWhER-pressed")return true;if(baseVariant==="Efm5YWhER")return true;return false;};const defaultLayoutId=React.useId();return /*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-kjWn6",classNames),style:{display:"contents"},children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,className:cx("framer-7sxk6u",className),"data-framer-name":"Variant 1","data-highlight":true,layoutDependency:layoutDependency,layoutId:"k0AMsWXn_",onTap:onTap1gvh565,ref:ref,style:{...style},transition:transition,...addPropertyOverrides({"Efm5YWhER-pressed":{"data-framer-name":undefined},"k0AMsWXn_-pressed":{"data-framer-name":undefined},Efm5YWhER:{"data-framer-name":"Variant 2",onTap:onTap169kow5}},baseVariant,gestureVariant),children:[/*#__PURE__*/ _jsx(SVG,{className:"framer-ir83em","data-framer-name":"Frame 10",layout:"position",layoutDependency:layoutDependency,layoutId:"gPvduBdza",opacity:1,svg:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 123 123"><g id="ss2362487319_1"><g><defs><linearGradient id="idss2362487319_2g2010544743" gradientTransform="rotate(30.224285083744633, 0.5, 0.5)"><stop offset="0" stop-color="rgb(62,67,73)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(35,36,39)" stop-opacity="1"></stop></linearGradient></defs><path d="M 0 61.5 C 0 27.534 27.534 0 61.5 0 C 95.466 0 123 27.534 123 61.5 C 123 95.466 95.466 123 61.5 123 C 27.534 123 0 95.466 0 61.5 Z" fill="url(#idss2362487319_2g2010544743)"></path></g></g><g transform="translate(8 8)" id="ss2362487319_3"><g><defs><radialGradient id="idss2362487319_4g1" cy="0.5794392523364486" cx="0.5934579439252337" r="0.723696261682243" gradientTransform="translate(0.5934579439252337, 0.5794392523364486) scale(1 1) translate(-0.5934579439252337, -0.5794392523364486)"><stop offset="0" stop-color="rgb(255,255,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(255,255,255)" stop-opacity="1"></stop></radialGradient></defs><path d="M 0 53.5 C 0 23.953 23.953 0 53.5 0 C 83.047 0 107 23.953 107 53.5 C 107 83.047 83.047 107 53.5 107 C 23.953 107 0 83.047 0 53.5 Z" fill="url(#idss2362487319_4g1)"></path></g></g><g transform="translate(8 8)" id="ss2362487319_5"><g><defs><path d="M 0 53.5 C 0 23.953 23.953 0 53.5 0 C 83.047 0 107 23.953 107 53.5 C 107 83.047 83.047 107 53.5 107 C 23.953 107 0 83.047 0 53.5 Z" id="a1032z"></path><filter id="a1034z" x="-5.6%" y="-5.6%" width="111.1%" height="111.1%" filterUnits="objectBoundingBox"><feGaussianBlur stdDeviation="2" in="SourceAlpha" result="a1036z"></feGaussianBlur><feOffset dx="2" dy="2" in="a1036z" result="a1037z"></feOffset><feComposite in="a1037z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1038z"></feComposite><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922  0 0 0 1 0" type="matrix" in="a1038z" result="a1039z"></feColorMatrix></filter><radialGradient id="idss2362487319_6g-193838675" cy="0.5794392523364486" cx="0.5934579439252337" r="0.723696261682243" gradientTransform="translate(0.5934579439252337, 0.5794392523364486) scale(1 1) translate(-0.5934579439252337, -0.5794392523364486)"><stop offset="0" stop-color="hsl(0, 0%, 33%)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(255,255,255)" stop-opacity="1"></stop></radialGradient></defs><use xlink:href="#a1032z" fill="url(#idss2362487319_6g-193838675)" clip-path="url(#a1033z)"></use><use fill="black" fill-opacity="1" filter="url(#a1034z)" xlink:href="#a1032z"></use></g></g><g transform="translate(15.737 16.676)" id="ss2362487319_7"><g><defs><radialGradient id="idss2362487319_8g1583115383" cy="0.7097317323241312" cx="0.6769637955394636" r="0.691583854406828" gradientTransform="translate(0.6769637955394636, 0.7097317323241312) scale(1 1) translate(-0.6769637955394636, -0.7097317323241312)"><stop offset="0" stop-color="rgba(107,107,107,0.65)" stop-opacity="0.65"></stop><stop offset="1" stop-color="rgba(255,255,255,0.65)" stop-opacity="0.65"></stop></radialGradient></defs><path d="M 45.793 91.584 C 20.503 91.584 0 71.083 0 45.793 C 0 20.501 20.503 0 45.793 0 C 71.085 0 91.585 20.501 91.585 45.793 C 91.585 71.083 71.085 91.584 45.793 91.584 Z" fill="url(#idss2362487319_8g1583115383)"></path></g></g><path d="M 61.529 108.26 C 36.239 108.26 15.737 87.759 15.737 62.469 C 15.737 37.177 36.239 16.676 61.529 16.676 C 86.821 16.676 107.322 37.177 107.322 62.469 C 107.322 87.759 86.821 108.26 61.529 108.26 Z" fill="rgb(20,21,22)"></path><g transform="translate(18 19)" id="ss2362487319_10"><g><defs><linearGradient id="idss2362487319_11g1155482606" gradientTransform="rotate(23.877267812177408, 0.5, 0.5)"><stop offset="0" stop-color="rgb(61,67,72)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(47,51,55)" stop-opacity="1"></stop></linearGradient></defs><path d="M 43.5 87 C 19.476 87 0 67.525 0 43.501 C 0 19.475 19.476 0 43.5 0 C 67.525 0 87 19.475 87 43.501 C 87 67.525 67.525 87 43.5 87 Z" fill="url(#idss2362487319_11g1155482606)"></path></g></g></svg>',svgContentId:2362487319,transition:transition,withExternalLayout:true,...addPropertyOverrides({"Efm5YWhER-pressed":{svg:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 123 123"><g id="ss1744723410_1"><g><defs><linearGradient id="idss1744723410_2g2010544743" gradientTransform="rotate(30.224285083744633, 0.5, 0.5)"><stop offset="0" stop-color="rgb(62,67,73)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(35,36,39)" stop-opacity="1"></stop></linearGradient></defs><path d="M 0 61.5 C 0 27.534 27.534 0 61.5 0 C 95.466 0 123 27.534 123 61.5 C 123 95.466 95.466 123 61.5 123 C 27.534 123 0 95.466 0 61.5 Z" fill="url(#idss1744723410_2g2010544743)"></path></g></g><g transform="translate(8 8)" id="ss1744723410_3"><g><defs><radialGradient id="idss1744723410_4g1" cy="0.5794392523364486" cx="0.5934579439252337" r="0.723696261682243" gradientTransform="translate(0.5934579439252337, 0.5794392523364486) scale(1 1) translate(-0.5934579439252337, -0.5794392523364486)"><stop offset="0" stop-color="rgb(255,255,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(255,255,255)" stop-opacity="1"></stop></radialGradient></defs><path d="M 0 53.5 C 0 23.953 23.953 0 53.5 0 C 83.047 0 107 23.953 107 53.5 C 107 83.047 83.047 107 53.5 107 C 23.953 107 0 83.047 0 53.5 Z" fill="url(#idss1744723410_4g1)"></path></g></g><g transform="translate(8 8)" id="ss1744723410_5"><g><defs><path d="M 0 53.5 C 0 23.953 23.953 0 53.5 0 C 83.047 0 107 23.953 107 53.5 C 107 83.047 83.047 107 53.5 107 C 23.953 107 0 83.047 0 53.5 Z" id="a1079z"></path><filter id="a1081z" x="-5.6%" y="-5.6%" width="111.1%" height="111.1%" filterUnits="objectBoundingBox"><feGaussianBlur stdDeviation="2" in="SourceAlpha" result="a1083z"></feGaussianBlur><feOffset dx="2" dy="2" in="a1083z" result="a1084z"></feOffset><feComposite in="a1084z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1085z"></feComposite><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922  0 0 0 1 0" type="matrix" in="a1085z" result="a1086z"></feColorMatrix></filter><radialGradient id="idss1744723410_6g-193838675" cy="0.5794392523364486" cx="0.5934579439252337" r="0.723696261682243" gradientTransform="translate(0.5934579439252337, 0.5794392523364486) scale(1 1) translate(-0.5934579439252337, -0.5794392523364486)"><stop offset="0" stop-color="hsl(0, 0%, 33%)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(255,255,255)" stop-opacity="1"></stop></radialGradient></defs><use xlink:href="#a1079z" fill="url(#idss1744723410_6g-193838675)" clip-path="url(#a1080z)"></use><use fill="black" fill-opacity="1" filter="url(#a1081z)" xlink:href="#a1079z"></use></g></g><g transform="translate(15.737 16.676)" id="ss1744723410_7"><g><defs><radialGradient id="idss1744723410_8g1583115383" cy="0.7097317323241312" cx="0.6769637955394636" r="0.691583854406828" gradientTransform="translate(0.6769637955394636, 0.7097317323241312) scale(1 1) translate(-0.6769637955394636, -0.7097317323241312)"><stop offset="0" stop-color="rgba(107,107,107,0.65)" stop-opacity="0.65"></stop><stop offset="1" stop-color="rgba(255,255,255,0.65)" stop-opacity="0.65"></stop></radialGradient></defs><path d="M 45.793 91.584 C 20.503 91.584 0 71.083 0 45.793 C 0 20.501 20.503 0 45.793 0 C 71.085 0 91.585 20.501 91.585 45.793 C 91.585 71.083 71.085 91.584 45.793 91.584 Z" fill="url(#idss1744723410_8g1583115383)"></path></g></g><path d="M 61.529 108.26 C 36.239 108.26 15.737 87.759 15.737 62.469 C 15.737 37.177 36.239 16.676 61.529 16.676 C 86.821 16.676 107.322 37.177 107.322 62.469 C 107.322 87.759 86.821 108.26 61.529 108.26 Z" fill="rgb(20,21,22)"></path><g transform="translate(18 19)" id="ss1744723410_10"><g><defs><path d="M 43.5 87 C 19.476 87 0 67.525 0 43.501 C 0 19.475 19.476 0 43.5 0 C 67.525 0 87 19.475 87 43.501 C 87 67.525 67.525 87 43.5 87 Z" id="a1091z"></path><filter id="a1093z" x="-7.2%" y="-7.2%" width="114.4%" height="114.4%" filterUnits="objectBoundingBox"><feOffset dx="0" dy="0" in="SourceAlpha" result="a1095z"></feOffset><feGaussianBlur stdDeviation="1.5" in="a1095z" result="a1096z"></feGaussianBlur><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.72 0" type="matrix" in="a1096z" result="a1097z"></feColorMatrix></filter><filter id="a1098z" x="-8.0%" y="-8.0%" width="116.0%" height="116.0%" filterUnits="objectBoundingBox"><feGaussianBlur stdDeviation="2" in="SourceAlpha" result="a1100z"></feGaussianBlur><feOffset dx="3" dy="3" in="a1100z" result="a1101z"></feOffset><feComposite in="a1101z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1102z"></feComposite><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.25 0" type="matrix" in="a1102z" result="a1103z"></feColorMatrix></filter><linearGradient id="idss1744723410_11g-833709655" gradientTransform="rotate(23.877267812177408, 0.5, 0.5)"><stop offset="0" stop-color="#22292F" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(47,51,55)" stop-opacity="1"></stop></linearGradient></defs><g filter="url(#a1093z)"><use fill="black" fill-opacity="1" stroke="black" stroke-opacity="0" stroke-width="0" xlink:href="#a1091z" clip-path="url(#a1092z)"></use></g><use xlink:href="#a1091z" fill="url(#idss1744723410_11g-833709655)" clip-path="url(#a1092z)"></use><use fill="black" fill-opacity="1" filter="url(#a1098z)" xlink:href="#a1091z"></use></g></g></svg>',svgContentId:1744723410},"k0AMsWXn_-pressed":{svg:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 123 123"><g id="ss1928045934_1"><g><defs><linearGradient id="idss1928045934_2g2010544743" gradientTransform="rotate(30.224285083744633, 0.5, 0.5)"><stop offset="0" stop-color="rgb(62,67,73)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(35,36,39)" stop-opacity="1"></stop></linearGradient></defs><path d="M 0 61.5 C 0 27.534 27.534 0 61.5 0 C 95.466 0 123 27.534 123 61.5 C 123 95.466 95.466 123 61.5 123 C 27.534 123 0 95.466 0 61.5 Z" fill="url(#idss1928045934_2g2010544743)"></path></g></g><g transform="translate(8 8)" id="ss1928045934_3"><g><defs><radialGradient id="idss1928045934_4g1" cy="0.5794392523364486" cx="0.5934579439252337" r="0.723696261682243" gradientTransform="translate(0.5934579439252337, 0.5794392523364486) scale(1 1) translate(-0.5934579439252337, -0.5794392523364486)"><stop offset="0" stop-color="rgb(255,255,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(255,255,255)" stop-opacity="1"></stop></radialGradient></defs><path d="M 0 53.5 C 0 23.953 23.953 0 53.5 0 C 83.047 0 107 23.953 107 53.5 C 107 83.047 83.047 107 53.5 107 C 23.953 107 0 83.047 0 53.5 Z" fill="url(#idss1928045934_4g1)"></path></g></g><g transform="translate(8 8)" id="ss1928045934_5"><g><defs><path d="M 0 53.5 C 0 23.953 23.953 0 53.5 0 C 83.047 0 107 23.953 107 53.5 C 107 83.047 83.047 107 53.5 107 C 23.953 107 0 83.047 0 53.5 Z" id="a1050z"></path><filter id="a1052z" x="-5.6%" y="-5.6%" width="111.1%" height="111.1%" filterUnits="objectBoundingBox"><feGaussianBlur stdDeviation="2" in="SourceAlpha" result="a1054z"></feGaussianBlur><feOffset dx="2" dy="2" in="a1054z" result="a1055z"></feOffset><feComposite in="a1055z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1056z"></feComposite><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922  0 0 0 1 0" type="matrix" in="a1056z" result="a1057z"></feColorMatrix></filter><radialGradient id="idss1928045934_6g-193838675" cy="0.5794392523364486" cx="0.5934579439252337" r="0.723696261682243" gradientTransform="translate(0.5934579439252337, 0.5794392523364486) scale(1 1) translate(-0.5934579439252337, -0.5794392523364486)"><stop offset="0" stop-color="hsl(0, 0%, 33%)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(255,255,255)" stop-opacity="1"></stop></radialGradient></defs><use xlink:href="#a1050z" fill="url(#idss1928045934_6g-193838675)" clip-path="url(#a1051z)"></use><use fill="black" fill-opacity="1" filter="url(#a1052z)" xlink:href="#a1050z"></use></g></g><g transform="translate(15.737 16.676)" id="ss1928045934_7"><g><defs><radialGradient id="idss1928045934_8g1583115383" cy="0.7097317323241312" cx="0.6769637955394636" r="0.691583854406828" gradientTransform="translate(0.6769637955394636, 0.7097317323241312) scale(1 1) translate(-0.6769637955394636, -0.7097317323241312)"><stop offset="0" stop-color="rgba(107,107,107,0.65)" stop-opacity="0.65"></stop><stop offset="1" stop-color="rgba(255,255,255,0.65)" stop-opacity="0.65"></stop></radialGradient></defs><path d="M 45.793 91.584 C 20.503 91.584 0 71.083 0 45.793 C 0 20.501 20.503 0 45.793 0 C 71.085 0 91.585 20.501 91.585 45.793 C 91.585 71.083 71.085 91.584 45.793 91.584 Z" fill="url(#idss1928045934_8g1583115383)"></path></g></g><path d="M 61.529 108.26 C 36.239 108.26 15.737 87.759 15.737 62.469 C 15.737 37.177 36.239 16.676 61.529 16.676 C 86.821 16.676 107.322 37.177 107.322 62.469 C 107.322 87.759 86.821 108.26 61.529 108.26 Z" fill="rgb(20,21,22)"></path><g transform="translate(18 19)" id="ss1928045934_10"><g><defs><path d="M 43.5 87 C 19.476 87 0 67.525 0 43.501 C 0 19.475 19.476 0 43.5 0 C 67.525 0 87 19.475 87 43.501 C 87 67.525 67.525 87 43.5 87 Z" id="a1062z"></path><filter id="a1064z" x="-8.0%" y="-8.0%" width="116.0%" height="116.0%" filterUnits="objectBoundingBox"><feGaussianBlur stdDeviation="1.5" in="SourceAlpha" result="a1066z"></feGaussianBlur><feOffset dx="0" dy="0" in="a1066z" result="a1067z"></feOffset><feComposite in="a1067z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1068z"></feComposite><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.72 0" type="matrix" in="a1068z" result="a1069z"></feColorMatrix><feGaussianBlur stdDeviation="2" in="SourceAlpha" result="a1071z"></feGaussianBlur><feOffset dx="3" dy="3" in="a1071z" result="a1072z"></feOffset><feComposite in="a1072z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1073z"></feComposite><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.25 0" type="matrix" in="a1073z" result="a1074z"></feColorMatrix><feMerge><feMergeNode in="a1069z"></feMergeNode><feMergeNode in="a1074z"></feMergeNode></feMerge></filter><linearGradient id="idss1928045934_11g2018992064" gradientTransform="rotate(23.877267812177408, 0.5, 0.5)"><stop offset="0" stop-color="hsl(207, 16%, 16%)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(47,51,55)" stop-opacity="1"></stop></linearGradient></defs><use xlink:href="#a1062z" fill="url(#idss1928045934_11g2018992064)" clip-path="url(#a1063z)"></use><use fill="black" fill-opacity="1" filter="url(#a1064z)" xlink:href="#a1062z"></use></g></g></svg>',svgContentId:1928045934}},baseVariant,gestureVariant)}),/*#__PURE__*/ _jsxs(motion.div,{className:"framer-db6wou","data-framer-name":"Frame 11",layoutDependency:layoutDependency,layoutId:"zzrNCP_Hb",style:{opacity:1},transition:transition,variants:{"k0AMsWXn_-pressed":{opacity:.95}},children:[/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--framer-font-size":"14px"},children:/*#__PURE__*/ _jsx(motion.span,{style:{"--font-selector":"R0Y7QXJpYWwtNzAw","--framer-font-family":'"Arial"',"--framer-font-size":"14px","--framer-font-weight":"700","--framer-text-color":"var(--extracted-1w3ko1f)"},children:"START"})})}),className:"framer-1ulp5ib","data-framer-name":"START",fonts:["GF;Arial-700"],layoutDependency:layoutDependency,layoutId:"h4eCKgRGW",style:{"--extracted-1w3ko1f":" rgba(255, 255, 255, 1)","--framer-paragraph-spacing":"0px",opacity:.9},transition:transition,variants:{"Efm5YWhER-pressed":{opacity:.85},"k0AMsWXn_-pressed":{opacity:.86}},verticalAlignment:"top",withExternalLayout:true}),/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--framer-font-size":"14px"},children:/*#__PURE__*/ _jsx(motion.span,{style:{"--font-selector":"R0Y7QXJpYWwtNzAw","--framer-font-family":'"Arial"',"--framer-font-size":"14px","--framer-font-weight":"700","--framer-text-color":"var(--extracted-1w3ko1f)"},children:"STOP"})})}),className:"framer-1l8zr2p","data-framer-name":"STOP",fonts:["GF;Arial-700"],layoutDependency:layoutDependency,layoutId:"yCyE_M4ez",style:{"--extracted-1w3ko1f":" rgba(255, 255, 255, 1)","--framer-paragraph-spacing":"0px",opacity:.9},transition:transition,variants:{"Efm5YWhER-pressed":{opacity:.85},"k0AMsWXn_-pressed":{opacity:.86}},verticalAlignment:"top",withExternalLayout:true,...addPropertyOverrides({"Efm5YWhER-pressed":{transformTemplate}},baseVariant,gestureVariant)})]}),isDisplayed()&&/*#__PURE__*/ _jsx(SVG,{className:"framer-yd7gq8","data-framer-name":"LED OFF",fill:"rgba(0,0,0,1)",intrinsicHeight:4,intrinsicWidth:16,layoutDependency:layoutDependency,layoutId:"y5j4rgvL9",svg:'<svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g filter="url(#filter0_di_43_241)">\n<rect width="16" height="4" rx="2" fill="#3C4248"/>\n</g>\n<rect x="1" y="1" width="1" height="1" fill="#282C30"/>\n<rect x="2" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="3" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="3" y="3" width="1" height="1" fill="#282C30"/>\n<rect x="4" y="1" width="1" height="1" fill="#282C30"/>\n<rect x="5" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="6" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="6" y="3" width="1" height="1" fill="#282C30"/>\n<rect x="7" y="1" width="1" height="1" fill="#282C30"/>\n<rect x="8" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="9" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="9" y="3" width="1" height="1" fill="#282C30"/>\n<rect x="10" y="1" width="1" height="1" fill="#282C30"/>\n<rect x="11" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="12" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="12" y="3" width="1" height="1" fill="#282C30"/>\n<rect x="13" y="1" width="1" height="1" fill="#282C30"/>\n<rect x="14" y="2" width="1" height="1" fill="#282C30"/>\n<defs>\n<filter id="filter0_di_43_241" x="-1" y="0" width="18" height="6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n<feOffset dy="1"/>\n<feGaussianBlur stdDeviation="0.5"/>\n<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>\n<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_43_241"/>\n<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_43_241" result="shape"/>\n<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n<feOffset dx="1" dy="1"/>\n<feGaussianBlur stdDeviation="0.5"/>\n<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n<feColorMatrix type="matrix" values="0 0 0 0 0.0784314 0 0 0 0 0.0823529 0 0 0 0 0.0862745 0 0 0 1 0"/>\n<feBlend mode="normal" in2="shape" result="effect2_innerShadow_43_241"/>\n</filter>\n</defs>\n</svg>\n',transition:transition,withExternalLayout:true}),isDisplayed1()&&/*#__PURE__*/ _jsx(motion.div,{className:"framer-1f0g1l0",layoutDependency:layoutDependency,layoutId:"QUa_cImN5",style:{backgroundColor:"var(--token-64bbd6a1-69fe-4b10-8ffe-e831c352bae9, rgb(20, 21, 36))",borderBottomLeftRadius:200,borderBottomRightRadius:200,borderTopLeftRadius:200,borderTopRightRadius:200,boxShadow:"0px 0.24145061431045178px 0.24145061431045178px -1.875px hsla(0, 100%, 71%, 0.68964), 0px 2px 2px -3.75px hsla(0, 100%, 71%, 0.25)"},transition:transition,children:isDisplayed1()&&/*#__PURE__*/ _jsx(SVG,{className:"framer-h7x8ui","data-framer-name":"LED ON",fill:"rgba(0,0,0,1)",intrinsicHeight:4,intrinsicWidth:16,layoutDependency:layoutDependency,layoutId:"eqGKjarxP",style:{filter:"drop-shadow(0px 0px 6px #B0FF04) drop-shadow(0px 0px 2px hsl(79, 100%, 72%))",WebkitFilter:"drop-shadow(0px 0px 6px #B0FF04) drop-shadow(0px 0px 2px hsl(79, 100%, 72%))"},svg:'<svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g filter="url(#filter0_di_43_241)">\n<rect width="16" height="4" rx="2" fill="#3C4248"/>\n</g>\n<rect x="1" y="1" width="1" height="1" fill="#282C30"/>\n<rect x="2" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="3" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="3" y="3" width="1" height="1" fill="#282C30"/>\n<rect x="4" y="1" width="1" height="1" fill="#282C30"/>\n<rect x="5" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="6" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="6" y="3" width="1" height="1" fill="#282C30"/>\n<rect x="7" y="1" width="1" height="1" fill="#282C30"/>\n<rect x="8" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="9" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="9" y="3" width="1" height="1" fill="#282C30"/>\n<rect x="10" y="1" width="1" height="1" fill="#282C30"/>\n<rect x="11" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="12" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="12" y="3" width="1" height="1" fill="#282C30"/>\n<rect x="13" y="1" width="1" height="1" fill="#282C30"/>\n<rect x="14" y="2" width="1" height="1" fill="#282C30"/>\n<defs>\n<filter id="filter0_di_43_241" x="-1" y="0" width="18" height="6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n<feOffset dy="1"/>\n<feGaussianBlur stdDeviation="0.5"/>\n<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>\n<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_43_241"/>\n<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_43_241" result="shape"/>\n<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n<feOffset dx="1" dy="1"/>\n<feGaussianBlur stdDeviation="0.5"/>\n<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n<feColorMatrix type="matrix" values="0 0 0 0 0.0784314 0 0 0 0 0.0823529 0 0 0 0 0.0862745 0 0 0 1 0"/>\n<feBlend mode="normal" in2="shape" result="effect2_innerShadow_43_241"/>\n</filter>\n</defs>\n</svg>\n',transition:transition,withExternalLayout:true})}),isDisplayed1()&&/*#__PURE__*/ _jsx(motion.div,{className:"framer-rq8y7i",layoutDependency:layoutDependency,layoutId:"O1tmTegj0",style:{backgroundColor:"rgba(216, 255, 133, 0.97)",borderBottomLeftRadius:200,borderBottomRightRadius:200,borderTopLeftRadius:200,borderTopRightRadius:200,boxShadow:"0px 0px 2px 1px hsl(79, 100%, 67%), 0px 0px 10px 1px hsla(79, 69%, 47%, 0.8), 0px 0px 19px 3px hsl(89, 100%, 51%)"},transition:transition})]})})});});const css=['.framer-kjWn6 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-kjWn6 .framer-zmb0pq { display: block; }",".framer-kjWn6 .framer-7sxk6u { cursor: pointer; height: 123px; overflow: visible; position: relative; width: 123px; }",".framer-kjWn6 .framer-ir83em { flex: none; height: 123px; left: 0px; position: absolute; top: 0px; width: 123px; }",".framer-kjWn6 .framer-db6wou { flex: none; height: 30px; left: 38px; overflow: visible; position: absolute; top: 65px; width: 46px; }",".framer-kjWn6 .framer-1ulp5ib { flex: none; height: auto; left: 0px; position: absolute; top: 0px; white-space: pre; width: auto; }",".framer-kjWn6 .framer-1l8zr2p { flex: none; height: auto; left: 4px; position: absolute; top: 14px; white-space: pre; width: auto; }",".framer-kjWn6 .framer-yd7gq8 { flex: none; height: 4px; left: 53px; position: absolute; top: 44px; width: 16px; }",".framer-kjWn6 .framer-1f0g1l0, .framer-kjWn6 .framer-rq8y7i { flex: none; height: 4px; left: 53px; overflow: visible; position: absolute; top: 44px; width: 16px; }",".framer-kjWn6 .framer-h7x8ui { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }",".framer-kjWn6 .framer-v-7sxk6u .framer-7sxk6u, .framer-kjWn6 .framer-v-hbb6sr .framer-7sxk6u { cursor: pointer; }",".framer-kjWn6.framer-v-7sxk6u.pressed .framer-db6wou { bottom: 27px; left: calc(50.40650406504067% - 46px / 2); top: unset; }",".framer-kjWn6.framer-v-7sxk6u.pressed .framer-yd7gq8, .framer-kjWn6.framer-v-hbb6sr.pressed .framer-1f0g1l0, .framer-kjWn6.framer-v-hbb6sr.pressed .framer-rq8y7i { left: calc(50.40650406504067% - 16px / 2); top: 45px; }",".framer-kjWn6.framer-v-hbb6sr.pressed .framer-1ulp5ib { left: unset; right: 0px; top: 1px; }",".framer-kjWn6.framer-v-hbb6sr.pressed .framer-1l8zr2p { bottom: -2px; left: 52%; top: unset; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 123
 * @framerIntrinsicWidth 123
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"Efm5YWhER":{"layout":["fixed","fixed"]},"GnQcYb6di":{"layout":["fixed","fixed"]},"pLu5iIrDF":{"layout":["fixed","fixed"]}}}
 * @framerVariables {"fx9nsxuZZ":"tap"}
 */ const FramerP9XrNKeD1=withCSS(Component,css,"framer-kjWn6");export default FramerP9XrNKeD1;FramerP9XrNKeD1.displayName="Start/Stop Engine";FramerP9XrNKeD1.defaultProps={height:123,width:123};addPropertyControls(FramerP9XrNKeD1,{variant:{options:["k0AMsWXn_","Efm5YWhER"],optionTitles:["Variant 1","Variant 2"],title:"Variant",type:ControlType.Enum},fx9nsxuZZ:{title:"Tap",type:ControlType.EventHandler}});addFonts(FramerP9XrNKeD1,[]);
export const __FramerMetadata__ = {"exports":{"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"default":{"type":"reactComponent","name":"FramerP9XrNKeD1","slots":[],"annotations":{"framerContractVersion":"1","framerIntrinsicHeight":"123","framerIntrinsicWidth":"123","framerCanvasComponentVariantDetails":"{\"propertyName\":\"variant\",\"data\":{\"default\":{\"layout\":[\"fixed\",\"fixed\"]},\"Efm5YWhER\":{\"layout\":[\"fixed\",\"fixed\"]},\"GnQcYb6di\":{\"layout\":[\"fixed\",\"fixed\"]},\"pLu5iIrDF\":{\"layout\":[\"fixed\",\"fixed\"]}}}","framerVariables":"{\"fx9nsxuZZ\":\"tap\"}"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./P9XrNKeD1.map