export async function evaluateAnswers(questions, studentAnswers, apiKey) {
  const evaluations = []

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i]
    const sa = studentAnswers[i] || ''

    try {
      const resp = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 256,
          messages: [{
            role: 'user',
            content: `You are a strict but fair teacher evaluating a student's answer.

Question: ${q.question}
${q.answer ? `Correct/Expected Answer: ${q.answer}` : ''}
Student's Answer: ${sa}

Respond ONLY with valid JSON:
{"correct": true, "feedback": "brief explanation"}`
          }]
        })
      })

      const data = await resp.json()
      if (data.error) throw new Error(data.error.message)

      const text = data.content[0].text.trim()
      const parsed = JSON.parse(text)

      evaluations.push({
        correct: parsed.correct,
        feedback: parsed.feedback
      })
    } catch (e) {
      const isCorrect = q.answer
        ? sa.toLowerCase().trim().includes(q.answer.toLowerCase().trim().split(' ')[0])
        : sa.trim().length > 5

      evaluations.push({
        correct: isCorrect,
        feedback: 'Offline baholandi (AI mavjud emas).'
      })
    }
  }

  return evaluations
}