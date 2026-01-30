# Setup Instructions for Extracting Quran Data and Using HTML Files

## Prerequisites
1. **Python 3.x**: Ensure you have Python 3.x installed on your system. You can download it from [python.org](https://www.python.org/downloads/).
2. **Git**: Install Git to clone the repository. Download it from [git-scm.com](https://git-scm.com/downloads).
3. **Virtual Environment** (optional but recommended): Set up a virtual environment for managing dependencies.

## Steps to Extract Quran Data
1. **Clone the repository**:
   ```bash
   git clone https://github.com/TurkazTuran/quran.git
   cd quran
   ```
2. **Install dependencies**:
   If there are any dependencies required, they will be listed in a requirements file (e.g., `requirements.txt`). Install them via pip:
   ```bash
   pip install -r requirements.txt
   ```
3. **Run the extraction script**:
   Locate the script responsible for extracting the Quran data (e.g., `extract_data.py`). Execute it:
   ```bash
   python extract_data.py
   ```

## Using the HTML Files
1. After extraction, locate the HTML files generated in the specified output directory.
2. You can open these HTML files in any web browser to view the Quran content.

## Additional Notes
- For any issues, please check the repository's issues page or contact the maintainer.