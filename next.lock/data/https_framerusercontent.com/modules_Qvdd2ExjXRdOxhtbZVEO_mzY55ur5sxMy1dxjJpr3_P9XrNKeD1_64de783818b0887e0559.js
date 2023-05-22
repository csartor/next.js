// Generated by Framer (b2eeca0)
import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";import{addFonts,addPropertyControls,ControlType,cx,SVG,useActiveVariantCallback,useVariantState,withCSS}from"framer";import{LayoutGroup,motion}from"framer-motion";import*as React from"react";const enabledGestures={Efm5YWhER:{pressed:true},k0AMsWXn_:{pressed:true}};const cycleOrder=["k0AMsWXn_","Efm5YWhER"];const variantClassNames={Efm5YWhER:"framer-v-hbb6sr",k0AMsWXn_:"framer-v-7sxk6u"};function addPropertyOverrides(overrides,...variants){const nextOverrides={};variants===null||variants===void 0?void 0:variants.forEach(variant=>variant&&Object.assign(nextOverrides,overrides[variant]));return nextOverrides;}const humanReadableVariantMap={"Variant 1":"k0AMsWXn_","Variant 2":"Efm5YWhER"};const transitions={default:{damping:60,delay:0,duration:.3,ease:[.44,0,.56,1],mass:1,stiffness:500,type:false}};const Component=/*#__PURE__*/ React.forwardRef(function({id,style,className,width,height,layoutId,variant:outerVariant="k0AMsWXn_",tap:fx9nsxuZZ,...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{baseVariant,classNames,gestureVariant,setGestureState,setVariant,transition,variants}=useVariantState({cycleOrder,defaultVariant:"k0AMsWXn_",enabledGestures,transitions,variant,variantClassNames});const layoutDependency=variants.join("-")+restProps.layoutDependency;const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const onTap1gvh565=activeVariantCallback(async(...args)=>{if(fx9nsxuZZ){const res=await fx9nsxuZZ(...args);if(res===false)return false;}setVariant("Efm5YWhER");});const onTap169kow5=activeVariantCallback(async(...args)=>{if(fx9nsxuZZ){const res=await fx9nsxuZZ(...args);if(res===false)return false;}setVariant("k0AMsWXn_");});const isDisplayed=()=>{if(gestureVariant==="Efm5YWhER-pressed")return false;if(baseVariant==="Efm5YWhER")return false;return true;};const isDisplayed1=()=>{if(gestureVariant==="Efm5YWhER-pressed")return true;if(baseVariant==="Efm5YWhER")return true;return false;};const defaultLayoutId=React.useId();return /*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-eu6Qz",classNames),style:{display:"contents"},children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,className:cx("framer-7sxk6u",className),"data-framer-name":"Variant 1","data-highlight":true,layoutDependency:layoutDependency,layoutId:"k0AMsWXn_",onTap:onTap1gvh565,ref:ref,style:{...style},transition:transition,...addPropertyOverrides({"Efm5YWhER-pressed":{"data-framer-name":undefined},"k0AMsWXn_-pressed":{"data-framer-name":undefined},Efm5YWhER:{"data-framer-name":"Variant 2",onTap:onTap169kow5}},baseVariant,gestureVariant),children:[/*#__PURE__*/ _jsx(SVG,{className:"framer-ir83em","data-framer-name":"Frame 10",layout:"position",layoutDependency:layoutDependency,layoutId:"gPvduBdza",opacity:1,svg:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 123 123"><g id="ss4186298780_1"><g><defs><linearGradient id="idss4186298780_2g2010544743" gradientTransform="rotate(30.224285083744633, 0.5, 0.5)"><stop offset="0" stop-color="rgb(62,67,73)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(35,36,39)" stop-opacity="1"></stop></linearGradient></defs><path d="M 0 61.5 C 0 27.534 27.534 0 61.5 0 C 95.466 0 123 27.534 123 61.5 C 123 95.466 95.466 123 61.5 123 C 27.534 123 0 95.466 0 61.5 Z" fill="url(#idss4186298780_2g2010544743)"></path></g></g><g transform="translate(8 8)" id="ss4186298780_3"><g><defs><radialGradient id="idss4186298780_4g1" cy="0.5794392523364486" cx="0.5934579439252337" r="0.723696261682243" gradientTransform="translate(0.5934579439252337, 0.5794392523364486) scale(1 1) translate(-0.5934579439252337, -0.5794392523364486)"><stop offset="0" stop-color="rgb(255,255,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(255,255,255)" stop-opacity="1"></stop></radialGradient></defs><path d="M 0 53.5 C 0 23.953 23.953 0 53.5 0 C 83.047 0 107 23.953 107 53.5 C 107 83.047 83.047 107 53.5 107 C 23.953 107 0 83.047 0 53.5 Z" fill="url(#idss4186298780_4g1)"></path></g></g><g transform="translate(8 8)" id="ss4186298780_5"><g><defs><path d="M 0 53.5 C 0 23.953 23.953 0 53.5 0 C 83.047 0 107 23.953 107 53.5 C 107 83.047 83.047 107 53.5 107 C 23.953 107 0 83.047 0 53.5 Z" id="a1278z"></path><filter id="a1280z" x="-2.8%" y="-1.9%" width="105.5%" height="103.6%" filterUnits="objectBoundingBox"><feGaussianBlur stdDeviation="1" in="SourceAlpha" result="a1282z"></feGaussianBlur><feOffset dx="1" dy="0" in="a1282z" result="a1283z"></feOffset><feComposite in="a1283z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1284z"></feComposite><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922  0 0 0 1 0" type="matrix" in="a1284z" result="a1285z"></feColorMatrix></filter><radialGradient id="idss4186298780_6g-193838675" cy="0.5794392523364486" cx="0.5934579439252337" r="0.723696261682243" gradientTransform="translate(0.5934579439252337, 0.5794392523364486) scale(1 1) translate(-0.5934579439252337, -0.5794392523364486)"><stop offset="0" stop-color="hsl(0, 0%, 33%)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(255,255,255)" stop-opacity="1"></stop></radialGradient></defs><use xlink:href="#a1278z" fill="url(#idss4186298780_6g-193838675)" clip-path="url(#a1279z)"></use><use fill="black" fill-opacity="1" filter="url(#a1280z)" xlink:href="#a1278z"></use></g></g><g transform="translate(15.737 16.676)" id="ss4186298780_7"><g><defs><radialGradient id="idss4186298780_8g1583115383" cy="0.7097317323241312" cx="0.6769637955394636" r="0.691583854406828" gradientTransform="translate(0.6769637955394636, 0.7097317323241312) scale(1 1) translate(-0.6769637955394636, -0.7097317323241312)"><stop offset="0" stop-color="rgba(107,107,107,0.65)" stop-opacity="0.65"></stop><stop offset="1" stop-color="rgba(255,255,255,0.65)" stop-opacity="0.65"></stop></radialGradient></defs><path d="M 45.793 91.584 C 20.503 91.584 0 71.083 0 45.793 C 0 20.501 20.503 0 45.793 0 C 71.085 0 91.585 20.501 91.585 45.793 C 91.585 71.083 71.085 91.584 45.793 91.584 Z" fill="url(#idss4186298780_8g1583115383)"></path></g></g><path d="M 61.529 108.26 C 36.239 108.26 15.737 87.759 15.737 62.469 C 15.737 37.177 36.239 16.676 61.529 16.676 C 86.821 16.676 107.322 37.177 107.322 62.469 C 107.322 87.759 86.821 108.26 61.529 108.26 Z" fill="rgb(20,21,22)"></path><g transform="translate(18 19)" id="ss4186298780_10"><g><defs><linearGradient id="idss4186298780_11g1155482606" gradientTransform="rotate(23.877267812177408, 0.5, 0.5)"><stop offset="0" stop-color="rgb(61,67,72)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(47,51,55)" stop-opacity="1"></stop></linearGradient></defs><path d="M 43.5 87 C 19.476 87 0 67.525 0 43.501 C 0 19.475 19.476 0 43.5 0 C 67.525 0 87 19.475 87 43.501 C 87 67.525 67.525 87 43.5 87 Z" fill="url(#idss4186298780_11g1155482606)"></path></g></g></svg>',svgContentId:4186298780,transition:transition,withExternalLayout:true,...addPropertyOverrides({"Efm5YWhER-pressed":{svg:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 123 123"><g id="ss3678750127_1"><g><defs><linearGradient id="idss3678750127_2g2010544743" gradientTransform="rotate(30.224285083744633, 0.5, 0.5)"><stop offset="0" stop-color="rgb(62,67,73)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(35,36,39)" stop-opacity="1"></stop></linearGradient></defs><path d="M 0 61.5 C 0 27.534 27.534 0 61.5 0 C 95.466 0 123 27.534 123 61.5 C 123 95.466 95.466 123 61.5 123 C 27.534 123 0 95.466 0 61.5 Z" fill="url(#idss3678750127_2g2010544743)"></path></g></g><g transform="translate(8 8)" id="ss3678750127_3"><g><defs><radialGradient id="idss3678750127_4g1" cy="0.5794392523364486" cx="0.5934579439252337" r="0.723696261682243" gradientTransform="translate(0.5934579439252337, 0.5794392523364486) scale(1 1) translate(-0.5934579439252337, -0.5794392523364486)"><stop offset="0" stop-color="rgb(255,255,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(255,255,255)" stop-opacity="1"></stop></radialGradient></defs><path d="M 0 53.5 C 0 23.953 23.953 0 53.5 0 C 83.047 0 107 23.953 107 53.5 C 107 83.047 83.047 107 53.5 107 C 23.953 107 0 83.047 0 53.5 Z" fill="url(#idss3678750127_4g1)"></path></g></g><g transform="translate(8 8)" id="ss3678750127_5"><g><defs><path d="M 0 53.5 C 0 23.953 23.953 0 53.5 0 C 83.047 0 107 23.953 107 53.5 C 107 83.047 83.047 107 53.5 107 C 23.953 107 0 83.047 0 53.5 Z" id="a1325z"></path><filter id="a1327z" x="-2.8%" y="-1.9%" width="105.5%" height="103.6%" filterUnits="objectBoundingBox"><feGaussianBlur stdDeviation="1" in="SourceAlpha" result="a1329z"></feGaussianBlur><feOffset dx="1" dy="0" in="a1329z" result="a1330z"></feOffset><feComposite in="a1330z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1331z"></feComposite><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922  0 0 0 1 0" type="matrix" in="a1331z" result="a1332z"></feColorMatrix></filter><radialGradient id="idss3678750127_6g-193838675" cy="0.5794392523364486" cx="0.5934579439252337" r="0.723696261682243" gradientTransform="translate(0.5934579439252337, 0.5794392523364486) scale(1 1) translate(-0.5934579439252337, -0.5794392523364486)"><stop offset="0" stop-color="hsl(0, 0%, 33%)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(255,255,255)" stop-opacity="1"></stop></radialGradient></defs><use xlink:href="#a1325z" fill="url(#idss3678750127_6g-193838675)" clip-path="url(#a1326z)"></use><use fill="black" fill-opacity="1" filter="url(#a1327z)" xlink:href="#a1325z"></use></g></g><g transform="translate(15.737 16.676)" id="ss3678750127_7"><g><defs><radialGradient id="idss3678750127_8g1583115383" cy="0.7097317323241312" cx="0.6769637955394636" r="0.691583854406828" gradientTransform="translate(0.6769637955394636, 0.7097317323241312) scale(1 1) translate(-0.6769637955394636, -0.7097317323241312)"><stop offset="0" stop-color="rgba(107,107,107,0.65)" stop-opacity="0.65"></stop><stop offset="1" stop-color="rgba(255,255,255,0.65)" stop-opacity="0.65"></stop></radialGradient></defs><path d="M 45.793 91.584 C 20.503 91.584 0 71.083 0 45.793 C 0 20.501 20.503 0 45.793 0 C 71.085 0 91.585 20.501 91.585 45.793 C 91.585 71.083 71.085 91.584 45.793 91.584 Z" fill="url(#idss3678750127_8g1583115383)"></path></g></g><path d="M 61.529 108.26 C 36.239 108.26 15.737 87.759 15.737 62.469 C 15.737 37.177 36.239 16.676 61.529 16.676 C 86.821 16.676 107.322 37.177 107.322 62.469 C 107.322 87.759 86.821 108.26 61.529 108.26 Z" fill="rgb(20,21,22)"></path><g transform="translate(18 19)" id="ss3678750127_10"><g><defs><path d="M 43.5 87 C 19.476 87 0 67.525 0 43.501 C 0 19.475 19.476 0 43.5 0 C 67.525 0 87 19.475 87 43.501 C 87 67.525 67.525 87 43.5 87 Z" id="a1337z"></path><filter id="a1339z" x="-7.2%" y="-7.2%" width="114.4%" height="114.4%" filterUnits="objectBoundingBox"><feOffset dx="0" dy="0" in="SourceAlpha" result="a1341z"></feOffset><feGaussianBlur stdDeviation="1.5" in="a1341z" result="a1342z"></feGaussianBlur><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.72 0" type="matrix" in="a1342z" result="a1343z"></feColorMatrix></filter><filter id="a1344z" x="-8.0%" y="-8.0%" width="116.0%" height="116.0%" filterUnits="objectBoundingBox"><feGaussianBlur stdDeviation="2" in="SourceAlpha" result="a1346z"></feGaussianBlur><feOffset dx="3" dy="3" in="a1346z" result="a1347z"></feOffset><feComposite in="a1347z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1348z"></feComposite><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.25 0" type="matrix" in="a1348z" result="a1349z"></feColorMatrix></filter><linearGradient id="idss3678750127_11g-833709655" gradientTransform="rotate(23.877267812177408, 0.5, 0.5)"><stop offset="0" stop-color="#22292F" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(47,51,55)" stop-opacity="1"></stop></linearGradient></defs><g filter="url(#a1339z)"><use fill="black" fill-opacity="1" stroke="black" stroke-opacity="0" stroke-width="0" xlink:href="#a1337z" clip-path="url(#a1338z)"></use></g><use xlink:href="#a1337z" fill="url(#idss3678750127_11g-833709655)" clip-path="url(#a1338z)"></use><use fill="black" fill-opacity="1" filter="url(#a1344z)" xlink:href="#a1337z"></use></g></g></svg>',svgContentId:3678750127},"k0AMsWXn_-pressed":{svg:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 123 123"><g id="ss1745781518_1"><g><defs><linearGradient id="idss1745781518_2g2010544743" gradientTransform="rotate(30.224285083744633, 0.5, 0.5)"><stop offset="0" stop-color="rgb(62,67,73)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(35,36,39)" stop-opacity="1"></stop></linearGradient></defs><path d="M 0 61.5 C 0 27.534 27.534 0 61.5 0 C 95.466 0 123 27.534 123 61.5 C 123 95.466 95.466 123 61.5 123 C 27.534 123 0 95.466 0 61.5 Z" fill="url(#idss1745781518_2g2010544743)"></path></g></g><g transform="translate(8 8)" id="ss1745781518_3"><g><defs><radialGradient id="idss1745781518_4g1" cy="0.5794392523364486" cx="0.5934579439252337" r="0.723696261682243" gradientTransform="translate(0.5934579439252337, 0.5794392523364486) scale(1 1) translate(-0.5934579439252337, -0.5794392523364486)"><stop offset="0" stop-color="rgb(255,255,255)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(255,255,255)" stop-opacity="1"></stop></radialGradient></defs><path d="M 0 53.5 C 0 23.953 23.953 0 53.5 0 C 83.047 0 107 23.953 107 53.5 C 107 83.047 83.047 107 53.5 107 C 23.953 107 0 83.047 0 53.5 Z" fill="url(#idss1745781518_4g1)"></path></g></g><g transform="translate(8 8)" id="ss1745781518_5"><g><defs><path d="M 0 53.5 C 0 23.953 23.953 0 53.5 0 C 83.047 0 107 23.953 107 53.5 C 107 83.047 83.047 107 53.5 107 C 23.953 107 0 83.047 0 53.5 Z" id="a1296z"></path><filter id="a1298z" x="-2.8%" y="-1.9%" width="105.5%" height="103.6%" filterUnits="objectBoundingBox"><feGaussianBlur stdDeviation="1" in="SourceAlpha" result="a1300z"></feGaussianBlur><feOffset dx="1" dy="0" in="a1300z" result="a1301z"></feOffset><feComposite in="a1301z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1302z"></feComposite><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922   0 0 0 0 0.3686274509803922  0 0 0 1 0" type="matrix" in="a1302z" result="a1303z"></feColorMatrix></filter><radialGradient id="idss1745781518_6g-193838675" cy="0.5794392523364486" cx="0.5934579439252337" r="0.723696261682243" gradientTransform="translate(0.5934579439252337, 0.5794392523364486) scale(1 1) translate(-0.5934579439252337, -0.5794392523364486)"><stop offset="0" stop-color="hsl(0, 0%, 33%)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(255,255,255)" stop-opacity="1"></stop></radialGradient></defs><use xlink:href="#a1296z" fill="url(#idss1745781518_6g-193838675)" clip-path="url(#a1297z)"></use><use fill="black" fill-opacity="1" filter="url(#a1298z)" xlink:href="#a1296z"></use></g></g><g transform="translate(15.737 16.676)" id="ss1745781518_7"><g><defs><radialGradient id="idss1745781518_8g1583115383" cy="0.7097317323241312" cx="0.6769637955394636" r="0.691583854406828" gradientTransform="translate(0.6769637955394636, 0.7097317323241312) scale(1 1) translate(-0.6769637955394636, -0.7097317323241312)"><stop offset="0" stop-color="rgba(107,107,107,0.65)" stop-opacity="0.65"></stop><stop offset="1" stop-color="rgba(255,255,255,0.65)" stop-opacity="0.65"></stop></radialGradient></defs><path d="M 45.793 91.584 C 20.503 91.584 0 71.083 0 45.793 C 0 20.501 20.503 0 45.793 0 C 71.085 0 91.585 20.501 91.585 45.793 C 91.585 71.083 71.085 91.584 45.793 91.584 Z" fill="url(#idss1745781518_8g1583115383)"></path></g></g><path d="M 61.529 108.26 C 36.239 108.26 15.737 87.759 15.737 62.469 C 15.737 37.177 36.239 16.676 61.529 16.676 C 86.821 16.676 107.322 37.177 107.322 62.469 C 107.322 87.759 86.821 108.26 61.529 108.26 Z" fill="rgb(20,21,22)"></path><g transform="translate(18 19)" id="ss1745781518_10"><g><defs><path d="M 43.5 87 C 19.476 87 0 67.525 0 43.501 C 0 19.475 19.476 0 43.5 0 C 67.525 0 87 19.475 87 43.501 C 87 67.525 67.525 87 43.5 87 Z" id="a1308z"></path><filter id="a1310z" x="-8.0%" y="-8.0%" width="116.0%" height="116.0%" filterUnits="objectBoundingBox"><feGaussianBlur stdDeviation="1.5" in="SourceAlpha" result="a1312z"></feGaussianBlur><feOffset dx="0" dy="0" in="a1312z" result="a1313z"></feOffset><feComposite in="a1313z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1314z"></feComposite><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.72 0" type="matrix" in="a1314z" result="a1315z"></feColorMatrix><feGaussianBlur stdDeviation="2" in="SourceAlpha" result="a1317z"></feGaussianBlur><feOffset dx="3" dy="3" in="a1317z" result="a1318z"></feOffset><feComposite in="a1318z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1319z"></feComposite><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.25 0" type="matrix" in="a1319z" result="a1320z"></feColorMatrix><feMerge><feMergeNode in="a1315z"></feMergeNode><feMergeNode in="a1320z"></feMergeNode></feMerge></filter><linearGradient id="idss1745781518_11g2018992064" gradientTransform="rotate(23.877267812177408, 0.5, 0.5)"><stop offset="0" stop-color="hsl(207, 16%, 16%)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(47,51,55)" stop-opacity="1"></stop></linearGradient></defs><use xlink:href="#a1308z" fill="url(#idss1745781518_11g2018992064)" clip-path="url(#a1309z)"></use><use fill="black" fill-opacity="1" filter="url(#a1310z)" xlink:href="#a1308z"></use></g></g></svg>',svgContentId:1745781518}},baseVariant,gestureVariant)}),isDisplayed()&&/*#__PURE__*/ _jsx(SVG,{className:"framer-yd7gq8","data-framer-name":"LED OFF",fill:"rgba(0,0,0,1)",intrinsicHeight:4,intrinsicWidth:16,layoutDependency:layoutDependency,layoutId:"y5j4rgvL9",svg:'<svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g filter="url(#filter0_di_43_241)">\n<rect width="16" height="4" rx="2" fill="#3C4248"/>\n</g>\n<rect x="1" y="1" width="1" height="1" fill="#282C30"/>\n<rect x="2" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="3" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="3" y="3" width="1" height="1" fill="#282C30"/>\n<rect x="4" y="1" width="1" height="1" fill="#282C30"/>\n<rect x="5" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="6" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="6" y="3" width="1" height="1" fill="#282C30"/>\n<rect x="7" y="1" width="1" height="1" fill="#282C30"/>\n<rect x="8" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="9" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="9" y="3" width="1" height="1" fill="#282C30"/>\n<rect x="10" y="1" width="1" height="1" fill="#282C30"/>\n<rect x="11" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="12" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="12" y="3" width="1" height="1" fill="#282C30"/>\n<rect x="13" y="1" width="1" height="1" fill="#282C30"/>\n<rect x="14" y="2" width="1" height="1" fill="#282C30"/>\n<defs>\n<filter id="filter0_di_43_241" x="-1" y="0" width="18" height="6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n<feOffset dy="1"/>\n<feGaussianBlur stdDeviation="0.5"/>\n<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>\n<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_43_241"/>\n<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_43_241" result="shape"/>\n<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n<feOffset dx="1" dy="1"/>\n<feGaussianBlur stdDeviation="0.5"/>\n<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n<feColorMatrix type="matrix" values="0 0 0 0 0.0784314 0 0 0 0 0.0823529 0 0 0 0 0.0862745 0 0 0 1 0"/>\n<feBlend mode="normal" in2="shape" result="effect2_innerShadow_43_241"/>\n</filter>\n</defs>\n</svg>\n',transition:transition,withExternalLayout:true}),isDisplayed1()&&/*#__PURE__*/ _jsx(motion.div,{className:"framer-1f0g1l0",layoutDependency:layoutDependency,layoutId:"QUa_cImN5",style:{backgroundColor:"var(--token-64bbd6a1-69fe-4b10-8ffe-e831c352bae9, rgb(20, 21, 36))",borderBottomLeftRadius:200,borderBottomRightRadius:200,borderTopLeftRadius:200,borderTopRightRadius:200,boxShadow:"0px 0.24145061431045178px 0.24145061431045178px -1.875px hsla(0, 100%, 71%, 0.68964), 0px 2px 2px -3.75px hsla(0, 100%, 71%, 0.25)"},transition:transition,children:isDisplayed1()&&/*#__PURE__*/ _jsx(SVG,{className:"framer-h7x8ui","data-framer-name":"LED ON",fill:"rgba(0,0,0,1)",intrinsicHeight:4,intrinsicWidth:16,layoutDependency:layoutDependency,layoutId:"eqGKjarxP",style:{filter:"drop-shadow(0px 0px 6px #B0FF04) drop-shadow(0px 0px 2px hsl(79, 100%, 72%))",WebkitFilter:"drop-shadow(0px 0px 6px #B0FF04) drop-shadow(0px 0px 2px hsl(79, 100%, 72%))"},svg:'<svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g filter="url(#filter0_di_43_241)">\n<rect width="16" height="4" rx="2" fill="#3C4248"/>\n</g>\n<rect x="1" y="1" width="1" height="1" fill="#282C30"/>\n<rect x="2" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="3" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="3" y="3" width="1" height="1" fill="#282C30"/>\n<rect x="4" y="1" width="1" height="1" fill="#282C30"/>\n<rect x="5" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="6" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="6" y="3" width="1" height="1" fill="#282C30"/>\n<rect x="7" y="1" width="1" height="1" fill="#282C30"/>\n<rect x="8" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="9" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="9" y="3" width="1" height="1" fill="#282C30"/>\n<rect x="10" y="1" width="1" height="1" fill="#282C30"/>\n<rect x="11" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="12" y="2" width="1" height="1" fill="#282C30"/>\n<rect x="12" y="3" width="1" height="1" fill="#282C30"/>\n<rect x="13" y="1" width="1" height="1" fill="#282C30"/>\n<rect x="14" y="2" width="1" height="1" fill="#282C30"/>\n<defs>\n<filter id="filter0_di_43_241" x="-1" y="0" width="18" height="6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n<feOffset dy="1"/>\n<feGaussianBlur stdDeviation="0.5"/>\n<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>\n<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_43_241"/>\n<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_43_241" result="shape"/>\n<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n<feOffset dx="1" dy="1"/>\n<feGaussianBlur stdDeviation="0.5"/>\n<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>\n<feColorMatrix type="matrix" values="0 0 0 0 0.0784314 0 0 0 0 0.0823529 0 0 0 0 0.0862745 0 0 0 1 0"/>\n<feBlend mode="normal" in2="shape" result="effect2_innerShadow_43_241"/>\n</filter>\n</defs>\n</svg>\n',transition:transition,withExternalLayout:true})}),isDisplayed1()&&/*#__PURE__*/ _jsx(motion.div,{className:"framer-rq8y7i",layoutDependency:layoutDependency,layoutId:"O1tmTegj0",style:{backgroundColor:"rgba(216, 255, 133, 0.97)",borderBottomLeftRadius:200,borderBottomRightRadius:200,borderTopLeftRadius:200,borderTopRightRadius:200,boxShadow:"0px 0px 2px 1px hsl(79, 100%, 67%), 0px 0px 10px 1px hsla(79, 69%, 47%, 0.8), 0px 0px 19px 3px hsl(89, 100%, 51%)"},transition:transition})]})})});});const css=['.framer-eu6Qz [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-eu6Qz .framer-zmb0pq { display: block; }",".framer-eu6Qz .framer-7sxk6u { cursor: pointer; height: 123px; overflow: visible; position: relative; width: 123px; }",".framer-eu6Qz .framer-ir83em { flex: none; height: 123px; left: 0px; position: absolute; top: 0px; width: 123px; }",".framer-eu6Qz .framer-yd7gq8 { flex: none; height: 4px; left: 53px; position: absolute; top: 44px; width: 16px; }",".framer-eu6Qz .framer-1f0g1l0, .framer-eu6Qz .framer-rq8y7i { flex: none; height: 4px; left: 53px; overflow: visible; position: absolute; top: 44px; width: 16px; }",".framer-eu6Qz .framer-h7x8ui { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }",".framer-eu6Qz .framer-v-7sxk6u .framer-7sxk6u, .framer-eu6Qz .framer-v-hbb6sr .framer-7sxk6u { cursor: pointer; }",".framer-eu6Qz.framer-v-7sxk6u.pressed .framer-yd7gq8, .framer-eu6Qz.framer-v-hbb6sr.pressed .framer-1f0g1l0, .framer-eu6Qz.framer-v-hbb6sr.pressed .framer-rq8y7i { left: calc(50.40650406504067% - 16px / 2); top: 45px; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 123
 * @framerIntrinsicWidth 123
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"Efm5YWhER":{"layout":["fixed","fixed"]},"GnQcYb6di":{"layout":["fixed","fixed"]},"pLu5iIrDF":{"layout":["fixed","fixed"]}}}
 * @framerVariables {"fx9nsxuZZ":"tap"}
 */ const FramerP9XrNKeD1=withCSS(Component,css,"framer-eu6Qz");export default FramerP9XrNKeD1;FramerP9XrNKeD1.displayName="Start/Stop Engine";FramerP9XrNKeD1.defaultProps={height:123,width:123};addPropertyControls(FramerP9XrNKeD1,{variant:{options:["k0AMsWXn_","Efm5YWhER"],optionTitles:["Variant 1","Variant 2"],title:"Variant",type:ControlType.Enum},fx9nsxuZZ:{title:"Tap",type:ControlType.EventHandler}});addFonts(FramerP9XrNKeD1,[]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"FramerP9XrNKeD1","slots":[],"annotations":{"framerIntrinsicWidth":"123","framerCanvasComponentVariantDetails":"{\"propertyName\":\"variant\",\"data\":{\"default\":{\"layout\":[\"fixed\",\"fixed\"]},\"Efm5YWhER\":{\"layout\":[\"fixed\",\"fixed\"]},\"GnQcYb6di\":{\"layout\":[\"fixed\",\"fixed\"]},\"pLu5iIrDF\":{\"layout\":[\"fixed\",\"fixed\"]}}}","framerContractVersion":"1","framerIntrinsicHeight":"123","framerVariables":"{\"fx9nsxuZZ\":\"tap\"}"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./P9XrNKeD1.map