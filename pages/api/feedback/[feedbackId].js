import { buildFeedbackPath, extractFeedback } from "./";

function handler(req, res) {
  if (req.method === "DELETE") {
      // TODO: implement if needed...
  }
  // this will send the same request for every http verb!
  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);
  const selectedFeedback = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  );
  res.status(200).json({ feedback: selectedFeedback });
}

export default handler;
