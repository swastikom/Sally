import pickle
import pandas as pd
import numpy as np

with open('script/prediction.pkl', 'rb') as file:
    mode,edu_label_encoder = pickle.load(file)

data_for_outcome = {
    'Age':[28.0],
    'Education Level':["Master's"],
    'Years of Experience':[3.0]
}

testing_data = pd.DataFrame(data_for_outcome)

testing_data['Education Level'] = edu_label_encoder.transform(testing_data['Education Level'])

res = mode.predict(testing_data)[0]
res_array = np.array([res])

print(res_array[0])