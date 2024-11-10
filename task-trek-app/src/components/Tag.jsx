import "./Tag.css";
const Tag = ({ tagName,selectTag,selected }) => {
  const tagStyle ={
    Html:{backgroundColor:"#fda821"},
    Css:{backgroundColor:"#15d4c8"},
    Js:{backgroundColor:"#ffd12c"},
    React:{backgroundColor:"#4cdafc"},
    default:{backgroundColor:"#f9f9f9"},


  }
  return (
    <>
      <button style={selected ?tagStyle[tagName]:tagStyle.default}  type="button" key={tagName} className="tag" onClick={()=>selectTag(tagName)} >
        {tagName}
      </button>
    </>
  );
};
export default Tag;
