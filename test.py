from transformers import BertTokenizer
from transformers import BertForQuestionAnswering
import torch

# Initialize tokenizer for corpus of bert-large-uncased
tokenizer = BertTokenizer.from_pretrained('bert-large-uncased-whole-word-masking-finetuned-squad')

# Initialize model BertForQuestionAnswering for bert-large-uncased
model = BertForQuestionAnswering.from_pretrained('bert-large-uncased-whole-word-masking-finetuned-squad')


def answer_question(question, answer_text):
    '''
    Lấy input là chuỗi string của câu question và answer_text chứa nội dung câu trả lời của câu question.
    Xác định từ trong answer_text là câu trả lời và in ra.
    '''
    # ======== Tokenize ========
    # Áp dụng tokenizer cho cặp câu <question, answer_text>. input_ids là concatenate indice của cả 2 câu sau khi đã thêm các token CLS và SEP như mô tả trong tác vụ Question and Answering.
    input_ids = tokenizer.encode(question, answer_text)

    # ======== Set Segment IDs ========
    # Xác định vị trí đầu tiên chứa token [SEP] trong câu.
    sep_index = input_ids.index(tokenizer.sep_token_id)

    # Tạo segment index đánh dấu các vị trí từ thuộc question (giá trị 0) và answer_text (giá trị 1)
    num_seg_a = sep_index + 1
    num_seg_b = len(input_ids) - num_seg_a
    segment_ids = [0] * num_seg_a + [1] * num_seg_b

    # Kiểm tra độ dài segment_ids phải bằng input_ids
    assert len(segment_ids) == len(input_ids)

    # ======== Evaluate ========
    # Dự báo phân phối xác suất của vị trí của từ start và từ end trong chuỗi concatenate <question, answer_text> mà chứa kết quả cho câu trả lời.
    start_scores, end_scores = model(torch.tensor([input_ids]),  # chuỗi index biểu thị cho inputs.
                                token_type_ids=torch.tensor([segment_ids]))  # chuỗi index thành phần segment câu để phân biệt giữa câu question và câu answer_text

    # ======== Reconstruct Answer ========
    # Tìm ra vị trí start, end với score là cao nhất
    answer_start = torch.argmax(start_scores)
    answer_end = torch.argmax(end_scores)

    # Chuyển ngược từ input_ids sang list tokens
    tokens = tokenizer.convert_ids_to_tokens(input_ids)

    # Token đầu tiên của câu trả lời
    answer = tokens[answer_start]

    # Lựa chọn các thành phần còn lại của câu trả lời và join chúng với whitespace.
    for i in range(answer_start + 1, answer_end + 1):

        # Nếu token là một subword token (có dấu ## ở đầu) thì combine vào answer bằng token gốc (loại bỏ dấu ##).
        if tokens[i][0:2] == '##':
            answer += tokens[i][2:]

        # Nếu trái lại thì combine trực tiếp vào answer.
        else:
            answer += ' ' + tokens[i]
    print('Question: "' + question + '"')
    print('Answer: "' + answer + '"')


question = ""
paragraph = ""

# question = "ai là người đặt chân lên mặt trăng?"
# paragraph = "Truyền thông Mỹ ngày 25/8 đưa tin nhà du hành vũ trụ Neil Armstrong, người đầu tiên trong lịch sử đặt chân lên Mặt Trăng đã qua đời, thọ 82 tuổi. Hồi đầu tháng này, ông Armstrong đã phải trải qua ca phẫu thuật liên quan tới bệnh tim sau khi các bác sĩ phát hiện ông bị nghẽn động mạch vành."


answer_question(question, paragraph)
