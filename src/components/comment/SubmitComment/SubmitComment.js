import React, { useState } from 'react';
import axios from 'axios';

export default function SubmitComment() {
    const [formData, setFormData] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            post_id: 3,
            user_id: 1,
            comment_level: 1,
            content: formData,
            parent_id: '1'
        }
        console.log(data);

        axios.post('http://localhost:8083/api/forum/comment', data)
            .then(response => {
                console.log(response.data);
                console.log("Ngon rồi bạn ơi")
            })
            .catch(error => {
                console.log(error);
                console.log("Lỗi rồi kìa bạn ơi")
            });
    };

    const handleChange = (event) => {
        // setFormData({
        //     ...formData,
        //     [event.target.name]: event.target.value
        // });
        setFormData(event.target.value)
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* <label>
                Nhập id của bạn vào đây:
                <input type='text' name='user_id' value={formData.user_id} onChange={handleChange} />
            </label> */}
            <label>
                Name:
                <input type="text" name="content" value={formData.content} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}