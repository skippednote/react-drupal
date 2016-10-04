import React from 'react';

const Form = () => {
  return (
    <form onSubmit={this.submit}>
      <input
        ref="title"
        type="text"
        placeholder="Title"
        required
      />

      <input
        ref="speaker"
        type="text"
        placeholder="Speaker"
        required
      />

      <input
        ref="experience"
        type="text"
        placeholder="Experience"
        required
      />

      <textarea
        ref="description"
        placeholder="Description"
        required
      ></textarea>

      <textarea
        ref="about"
        placeholder="About Speaker"
        required
      ></textarea>

      <button
        type="submit"
        className="Add Post"
      >
        Post
      </button>
    </form>
  );
}

export default Form;
