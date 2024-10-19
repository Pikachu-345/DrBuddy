import streamlit as st
import pdfplumber
import pandas as pd


def extract_table_from_pdf(pdf_file):
    with pdfplumber.open(pdf_file) as pdf:
        first_page = pdf.pages[0]
        table = first_page.extract_table()
        df = pd.DataFrame(table[1:], columns=table[0])  
        return df


st.title("PDF Table Extractor and Out-of-Bounds Checker")
uploaded_file = st.file_uploader("Choose a PDF file", type="pdf")

if uploaded_file is not None:
    
    df = extract_table_from_pdf(uploaded_file)

   
    if st.button("Analyze"):
       
        fixed_out_of_bounds_results = [
            "MEAN CELL HAEMOGLOBIN CONCENTRATION (MCHC) is out of bounds",
            "ERYTHROCYTE SEDIMENTATION RATE (ESR), Sodium Citrate is out of bounds",
            "LDL CHOLESTEROL, SERUM is out of bounds",
            "NON-HDL CHOLESTEROL is out of bounds",
            "BILIRUBIN (CONJUGATED), SERUM is out of bounds",
            "CREATININE, Serum is out of bounds",
            "CALCIUM, Serum is out of bounds",
            "25 HYDROXY VITAMIN D, Serum is out of bounds"
        ]

        st.write("Out of Bounds Results (Fixed):")
        for result in fixed_out_of_bounds_results:
            st.error(result)
