from flask import Flask, request, jsonify
import numpy as np
from tensorflow.keras.models import load_model

app = Flask(__name__)
model = load_model('models/gru_accident_model.h5')  # Load pre-trained model

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    accelerometer = np.array(data['accelerometer'])  # Shape: (3,)
    gyroscope = np.array(data['gyroscope'])          # Shape: (3,)
    latitude = data['latitude']
    longitude = data['longitude']

    # Normalize data (example for Mumbai region)
    scaled_lat = (latitude - 19.0760) / 0.1
    scaled_lon = (longitude - 72.8777) / 0.1

    # Combine features (modify based on your GRU input shape)
    input_data = np.array([accelerometer[0], accelerometer[1], accelerometer[2],
                           gyroscope[0], gyroscope[1], gyroscope[2],
                           scaled_lat, scaled_lon])
    input_data = input_data.reshape(1, 8)  # Adjust for your model

    prediction = model.predict(input_data)
    return jsonify({'is_accident': bool(prediction[0][0] > 0.5)})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)