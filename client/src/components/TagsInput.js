import React from "react";
import { Tag, X } from "react-feather";
import './tags.css'
const TagsInput = (props) => {

    const [tags, setTags] = React.useState([]);


    return (
        <div className="Form">
        <h1>Tags</h1>
        <div className="TagForm">
          <Tag className="InputIcon" size="16" />
          <input
            type="text"
            placeholder="Add a tag..."
            onKeyPress={event => {
              if (event.WHICH  == 16) {
                setTags([...tags, event.target.value]);
                event.target.value = "";
              }
            }}
            autofocus
          />
        </div>
        <ul className="TagList">
          {tags.map(tag => (
            <li className="Tag">
              {tag}
              <X
                className="TagIcon"
                size="16"
                onClick={() => {
                  setTags([...tags.filter(word => word !== tag)]);
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    );
};
export default TagsInput;

/**
 * 
 * <div className="tags-input">
            <ul style={{listStyle:"none"}}>
                {tags.map((tag, index) => (
                    <li key={index}>
                        <span>{tag}</span>
                        <span className='tag-close-icon'
                        onClick={() => removeTags(index)}
                      >
                        x
                      </span>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                onKeyUp={event => addTags(event)}
                placeholder="Press enter to add tags"
            />
        </div>
 */