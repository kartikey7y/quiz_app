import data from "./response.json";

export const Chapters = () => {
  const chapters = [];
  chapters.push(data.title);
  return chapters;
};

export const Questions = (chapter) => {
  if (data.title === chapter) {
    return { topic: data.topic, questions: data.questions };
  }
};
