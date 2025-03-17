from PIL import Image, ImageDraw, ImageFont
import io
import textwrap

def create_certificate(name, course_name) -> io.BytesIO:
    image = Image.open("assets/certificate-template.png")
    draw = ImageDraw.Draw(image)
    
    font_regular = "assets/fonts/Sen-Regular.ttf"
    font_bold = "assets/fonts/Sen-Bold.ttf"
    font_semi_bold = "assets/fonts/Sen-SemiBold.ttf"
    font_medium = "assets/fonts/Sen-Medium.ttf"
    font_extra_bold = "assets/fonts/Sen-ExtraBold.ttf"

    name_position = (56, 321)
    about_title_position = (63, 409)
    about_content_position_x, about_content_position_y  = (61, 442)
    
    orange_color = (189, 122, 23)
    green_color = (48, 108, 118)

    name_text_size = 50
    about_title_text_size = 20
    about_content_text_size = 18 
    
    about_text = "About this certificate"
    about_content_text = f"""This certificate is proudly presented in recognition of outstanding dedication and achievement in the {course_name}. It serves as a testament to the recipient’s commitment, effort, and excellence in successfully completing the course. Issued by the awarding body, this certificate signifies the attainment of valuable knowledge and skills.
Presented with honor and appreciation.
    """

    name_font = ImageFont.truetype(font_semi_bold, name_text_size)
    title_font = ImageFont.truetype(font_extra_bold, about_title_text_size)
    content_font = ImageFont.truetype(font_medium, about_content_text_size)

    draw.text(name_position, name, fill=orange_color, font=name_font)
   
    draw.text(about_title_position, about_text, fill=green_color, font=title_font)

    wrapped_text = textwrap.fill(about_content_text, width=120)

    for line in wrapped_text.split("\n"):
        draw.text((about_content_position_x, about_content_position_y), line, font=content_font, fill=green_color)
        
        _, _, _, line_height = draw.textbbox((0, 0), line, font=content_font)
        about_content_position_y += line_height + 5  

    image_bytes = io.BytesIO()
    image.save(image_bytes, format="PNG")
    image_bytes.seek(0) 

    return image_bytes
