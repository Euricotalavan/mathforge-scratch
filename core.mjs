export function parsePack(raw){
 if(raw.length>500000)throw Error("題包超過 500 KB。");
 let p;try{p=JSON.parse(raw.replace(/^\uFEFF/,""));}catch{throw Error("JSON 格式無法讀取；請保留原始反斜線並重新匯出。");}
 let list;
 if(p?.format==="mathforge.problem-pack.v1"&&p.result?.kind==="exercise")list=[p.result.exercise];
 else if(p?.format==="mathforge.problem-pack.v2"&&p.result?.kind==="exercises")list=p.result.exercises;
 else if(p?.format==="mathforge.scratch-pack.v1")list=p.exercises;
 else throw Error("不支援這種題包。請使用練習題包，而非檢查報告或釐清回覆。");
 if(!Array.isArray(list)||list.length<1||list.length>8)throw Error("每組需要 1–8 題。");
 return list.map((x,i)=>{
 const text=(v,max,required)=>{if(typeof v!=="string"||v.length>max||(required&&!v.trim())||/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(v))throw Error("第 "+(i+1)+" 題內容或 LaTeX 編碼不正確。");return v;};
 if(!x||typeof x!=="object")throw Error("題目格式不正確。");
 if(x.hints!==undefined&&(!Array.isArray(x.hints)||x.hints.length>3))throw Error("最多三層提示。");
 return {title:text(x.title,120,true),statement:text(x.statement,12000,true),hints:(x.hints??[]).map(h=>text(h,3000,true)),solution:x.solution==null?"":text(x.solution,12000,false)};
 });
}
export function joinProse(s){return s.replace(/([\u3400-\u9fff])\r?\n(?=[\u3400-\u9fff])/g,"$1").replace(/\r?\n/g," ");}

