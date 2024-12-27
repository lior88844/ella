import { Task } from '../types/types'

// Helper function to get the correct audio path
const getAudioPath = (filename: string) => {
  const baseUrl = import.meta.env.BASE_URL
  return `${baseUrl}audio/${filename}`
}

export const tasks: Task[] = [
  {
    id: '1',
    name: 'לקפוץ על רגל אחת 5 פעמים',
    audioPath: getAudioPath('task1.mp3'),
    category: 'inside',
    icon: '🦶',
  },
  {
    id: '2',
    name: 'לשיר שיר אהוב',
    audioPath: getAudioPath('task2.mp3'),
    category: 'inside',
    icon: '🎤',
  },
  {
    id: '3',
    name: 'תכיני פיצה בתנור פיצות שלך עם התוספות הכי מיוחדות שיש',
    audioPath: getAudioPath('task3.mp3'),
    category: 'inside',
    icon: '🍕',
  },
  {
    id: '4',
    name: 'לכי תלטפי את גרינגו בבטן ובראש עד שהוא ירגע וישב',
    audioPath: getAudioPath('task4.mp3'),
    category: 'inside',
    icon: '🐶',
  },
  {
    id: '5',
    name: 'תכיני ציור של ים בתאילנד עם שמש צהובה וים כחול',
    audioPath: getAudioPath('task5.mp3'),
    category: 'inside',
    icon: '🌊',
  },
  {
    id: '6',
    name: 'תקפצי על הספה את הקפיצה הכי גבוהה שלך',
    audioPath: getAudioPath('task6.mp3'),
    category: 'inside',
    icon: '🛋️',
  },
  {
    id: '7',
    name: 'תלבישי את אחת הברביות בתלבושת מצחיקה',
    audioPath: getAudioPath('task7.mp3'),
    category: 'inside',
    icon: '🎎',
  },
  {
    id: '8',
    name: 'לכי למטבח בחדר שלך ותכיני מנה מגעילה',
    audioPath: getAudioPath('task8.mp3'),
    category: 'inside',
    icon: '🍲',
  },
  {
    id: '9',
    name: 'תקפצי 20 פעמים על רגל אחת ותספרי כל פעם שאת קופצת עד עשרים',
    audioPath: getAudioPath('task9.mp3'),
    category: 'inside',
    icon: '🦶',
  },
  {
    id: '10',
    name: 'תמציאי ריקוד לשיר חנוכה שלמדת בגן',
    audioPath: getAudioPath('task10.mp3'),
    category: 'inside',
    icon: '🎤',
  },
  {
    id: '11',
    name: 'תסתובבי בבית כמו חיה שאת בוחרת עד שאחד ההורים ינחש איזה חיה בחרת',
    audioPath: getAudioPath('task11.mp3'),
    category: 'inside',
    icon: '😽',
  },
  {
    id: '12',
    name: 'תבחרי את הבובה האהובה עלייך ותשכיבי אותה לישון במיטה שלך אחרי שאת ממציאה לה סיפור',
    audioPath: getAudioPath('task12.mp3'),
    category: 'inside',
    icon: '🐶',
  },
  {
    id: '13',
    name: 'תבני את המגדל הכי גבוהה שאת יכולה מהקוביות',
    audioPath: getAudioPath('task13.mp3'),
    category: 'inside',
    icon: '🔢',
  },
  {
    id: '14',
    name: 'תציירי את השמש הכי גדולה שאת יכולה על דף בצבע שהוא לא הצבע של השמש',
    audioPath: getAudioPath('task14.mp3'),
    category: 'inside',
    icon: '🌞',
  },
  {
    id: '15',
    name: 'תעשי מתיחות כמו חתול שמתעורר משינה',
    audioPath: getAudioPath('task15.mp3'),
    category: 'inside',
    icon: '🐱',
  },
  {
    id: '16',
    name: 'תעשי תנוחות יוגה הכי מיוחדות שאת מכירה',
    audioPath: getAudioPath('task16.mp3'),
    category: 'inside',
    icon: '',
  },
  {
    id: '17',
    name: 'תכיני מפלסטלינה יצור מוזר שהגיע מהירח',
    audioPath: getAudioPath('task17.mp3'),
    category: 'inside',
    icon: '🌙',
  },
  {
    id: '18',
    name: 'תמציאי סיפור על אלה בארץ הממתקים',
    audioPath: getAudioPath('task18.mp3'),
    category: 'inside',
    icon: '🍪',
  },
  {
    id: '19',
    name: 'תבחרי את הספר האהוב עלייך ותספרי אותו לאחת הבובות שלך עם סוף שונה לגמרי',
    audioPath: getAudioPath('task19.mp3'),
    category: 'outside',
    icon: '📖',
  },
  {
    id: '20',
    name: 'תלכי להתגלש במגלשה עם עיניים עצומות',
    audioPath: getAudioPath('task20.mp3'),
    category: 'outside',
    icon: '👁️',
  },
  {
    id: '21',
    name: 'תמצאי את האבן הכי קטנה בגינה',
    audioPath: getAudioPath('task21.mp3'),
    category: 'outside',
    icon: '⚾',
  },
  {
    id: '22',
    name: 'תמצאי 5 עלים מיוחדים בגינה',
    audioPath: getAudioPath('task22.mp3'),
    category: 'outside',
    icon: '🍃',
  },
  {
    id: '23',
    name: 'תמצאי מקל בגינה ותציירי איתו על האדמה את הממתק האהוב עלייך',
    audioPath: getAudioPath('task23.mp3'),
    category: 'outside',
    icon: '🖍️',
  },
  {
    id: '24',
    name: 'תמצאי את העץ הכי גבוה בגינה ותקפצי לידו 5 פעמים על רגל אחת',
    audioPath: getAudioPath('task24.mp3'),
    category: 'outside',
    icon: '🎯',
  },
  {
    id: '25',
    name: 'ממצאי עלה גדול ותנסי ללכת שהוא על הראש שלך מבלי שהוא נופל',
    audioPath: getAudioPath('task25.mp3'),
    category: 'outside',
    icon: '🍁',
  },
  {
    id: '26',
    name: 'לעוף כמו פרפר עד לפרח הקרוב',
    audioPath: getAudioPath('task26.mp3'),
    category: 'outside',
    icon: '🦋',
  },
  {
    id: '27',
    name: 'תמצאי את הסולם הכי גבוה בגינה ותטפסי עליו הכי מהר',
    audioPath: getAudioPath('task27.mp3'),
    category: 'outside',
    icon: '🪜',
  },
  {
    id: '28',
    name: 'תעשי כלב מביט למטה בגינה על הספסל הכי נקי',
    audioPath: getAudioPath('task28.mp3'),
    category: 'outside',
    icon: '🐶',
  },
  {
    id: '29',
    name: 'תרוצי הכי מהר שאת יכולה מסביב לגינה ',
    audioPath: getAudioPath('task29.mp3'),
    category: 'outside',
    icon: '🏃',
  },
  {
    id: '30',
    name: 'תמצאי את הפרח הכי יפה בגינה ותגלי אם יש לו ריח מתוק או שאין לו ריח בכלל',
    audioPath: getAudioPath('task30.mp3'),
    category: 'outside',
    icon: '🌸',
  },
]
