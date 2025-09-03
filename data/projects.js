// data/projects.js
export const projectsData = [
  {
    id: 'sentiment-analysis',
    title: 'Sentiment Analysis of Movie Reviews',
    subtitle: 'Classifying movie reviews as positive or negative using NLP and RNNs.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'NLTK', 'Scikit-learn', 'Pandas', 'NumPy'],
    overview: `This project focuses on the task of sentiment analysis, a common application of Natural Language Processing (NLP). The goal was to build a machine learning model capable of automatically determining the sentiment (positive or negative) of a given movie review. This involved text preprocessing, feature extraction, and the implementation of a Recurrent Neural Network (RNN) to capture sequential information in the text.`,
    features: [
      'Text cleaning and preprocessing pipeline to handle noise in raw review data.',
      'Implementation of word embeddings (Word2Vec/GloVe) to represent words as dense vectors.',
      'Built and trained a Long Short-Term Memory (LSTM) network, a type of RNN, for sequence classification.',
      'Achieved a classification accuracy of over 85% on the test dataset.',
      'Developed a simple web interface (using Flask) for live demonstration of the model.',
    ],
    githubLink: 'https://github.com/alexdoe/sentiment-analysis', // Replace with actual link
    liveDemoLink: 'https://sentiment-analysis-demo.vercel.app', // Replace with actual link or null
  },
  {
    id: 'image-classifier',
    title: 'Image Classifier for Handwritten Digits',
    subtitle: 'A CNN to recognize and classify digits from the MNIST dataset.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Matplotlib'],
    overview: `This project is a classic introduction to computer vision and deep learning. I developed a Convolutional Neural Network (CNN) from scratch to classify handwritten digits from the MNIST dataset. The goal was to understand the fundamental building blocks of CNNs, including convolutional layers, pooling layers, and fully connected layers, and to train a model that achieves high accuracy on this benchmark task.`,
    features: [
      'Designed and implemented a CNN architecture with multiple convolutional and pooling layers.',
      'Preprocessed image data, including normalization and reshaping, to prepare it for the model.',
      'Trained the model on the MNIST training set and evaluated its performance on the unseen test set.',
      'Achieved a final accuracy of 99.2% on the test data.',
      'Visualized the learning process through accuracy and loss curves and analyzed misclassified examples.',
    ],
    githubLink: 'https://github.com/alexdoe/image-classifier', // Replace with actual link
    liveDemoLink: null, // No live demo for this example
  },
  {
    id: 'churn-prediction',
    title: 'Customer Churn Prediction Model',
    subtitle: 'Predicting customer churn for a telecom service using machine learning.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'Matplotlib', 'Seaborn'],
    overview: `In this project, I tackled a common business problem: customer churn. The objective was to build a predictive model that could identify customers who are likely to stop using a telecom service. By accurately predicting churn, a company can proactively engage with at-risk customers through targeted retention strategies, ultimately reducing revenue loss. The project involved data exploration, feature engineering, and training various classification models to find the best performer.`,
    features: [
      'Performed Exploratory Data Analysis (EDA) to understand the dataset and identify key factors related to churn.',
      'Engineered new features from existing data to improve model performance.',
      'Trained and evaluated several classification algorithms, including Logistic Regression, Random Forest, and Gradient Boosting (XGBoost).',
      'Optimized the best-performing model (XGBoost) using hyperparameter tuning with GridSearch.',
      'Interpreted model results to provide actionable insights into the main drivers of customer churn.',
    ],
    githubLink: 'https://github.com/alexdoe/churn-prediction', // Replace with actual link
    liveDemoLink: null, // No live demo for this example
  },
];